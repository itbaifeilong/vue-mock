<template>
	<div>
		<div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
		<div id="myEchart2" :style="{width: '100%', height: '500px'}" ref="myEchart2"></div>
	</div>

</template>
<script>
	import echarts from 'echarts'
	export default {
		props: {
			className: {
				type: String,
				default: 'yourClassName'
			},
			id: {
				type: String,
				default: 'yourID'
			},
			width: {
				type: String,
				default: '500px'
			},
			height: {
				type: String,
				default: '500px'
			}
		},
		data() {
			return {
				chart: null
			}
		},
		mounted() {
			this.initChart();
			this.initChart2();
		},
		beforeDestroy() {
			if(!this.chart) {
				return
			}
			this.chart.dispose();
			this.chart = null;
		},
		methods: {
			initChart() {
				this.chart = echarts.init(this.$refs.myEchart);
				// 把配置和数据放这里
				this.chart.setOption({
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '直接访问',
						type: 'bar',
						barWidth: '60%',
						data: [10, 52, 200, 334, 390, 330, 220]
					}]
				})
			},
			initChart2() {
				this.chart2 = echarts.init(this.$refs.myEchart2);
				var weatherIcons = {
					'Sunny': './data/asset/img/weather/sunny_128.png',
					'Cloudy': './data/asset/img/weather/cloudy_128.png',
					'Showers': './data/asset/img/weather/showers_128.png'
				};
				this.chart2.setOption({
					title: {
						text: '天气情况统计',
						subtext: '虚构数据',
						left: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						// orient: 'vertical',
						// top: 'middle',
						bottom: 10,
						left: 'center',
						data: ['西凉', '益州', '兖州', '荆州', '幽州']
					},
					series: [{
						type: 'pie',
						radius: '65%',
						center: ['50%', '50%'],
						selectedMode: 'single',
						data: [{
								value: 1548,
								name: '幽州',
								label: {
									normal: {
										formatter: [
											'{title|{b}}{abg|}',
											'  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
											'{hr|}',
											'  {Sunny|}{value|202}{rate|55.3%}',
											'  {Cloudy|}{value|142}{rate|38.9%}',
											'  {Showers|}{value|21}{rate|5.8%}'
										].join('\n'),
										backgroundColor: '#eee',
										borderColor: '#777',
										borderWidth: 1,
										borderRadius: 4,
										rich: {
											title: {
												color: '#eee',
												align: 'center'
											},
											abg: {
												backgroundColor: '#333',
												width: '100%',
												align: 'right',
												height: 25,
												borderRadius: [4, 4, 0, 0]
											},
											Sunny: {
												height: 30,
												align: 'left',
												backgroundColor: {
													image: weatherIcons.Sunny
												}
											},
											Cloudy: {
												height: 30,
												align: 'left',
												backgroundColor: {
													image: weatherIcons.Cloudy
												}
											},
											Showers: {
												height: 30,
												align: 'left',
												backgroundColor: {
													image: weatherIcons.Showers
												}
											},
											weatherHead: {
												color: '#333',
												height: 24,
												align: 'left'
											},
											hr: {
												borderColor: '#777',
												width: '100%',
												borderWidth: 0.5,
												height: 0
											},
											value: {
												width: 20,
												padding: [0, 20, 0, 30],
												align: 'left'
											},
											valueHead: {
												color: '#333',
												width: 20,
												padding: [0, 20, 0, 30],
												align: 'center'
											},
											rate: {
												width: 40,
												align: 'right',
												padding: [0, 10, 0, 0]
											},
											rateHead: {
												color: '#333',
												width: 40,
												align: 'center',
												padding: [0, 10, 0, 0]
											}
										}
									}
								}
							},
							{
								value: 535,
								name: '荆州'
							},
							{
								value: 510,
								name: '兖州'
							},
							{
								value: 634,
								name: '益州'
							},
							{
								value: 735,
								name: '西凉'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				})
			}
		}
	}
</script>