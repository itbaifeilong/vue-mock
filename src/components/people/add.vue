<template>
	<div>
		修改资料<br/> 动态路由传的id： {{ $route.params.id }}
		<div id="example-1">
			<button @click="show = !show">
   				 Toggle render
  			</button>
			<transition name="slide-fade">
				<p v-if="show">hello</p>
			</transition>
		</div>

		<div>
			<el-row>
				<el-col :span="4">
					<el-popover placement="top-start" trigger="hover">
						<div style="text-align: center">
							<el-progress color="#67C23A" type="circle" :percentage="music.volume"></el-progress><br>
							<el-button @click="changeVolume(-10)" icon="el-icon-minus" circle></el-button>
							<el-button @click="changeVolume(10)" icon="el-icon-plus" circle></el-button>
						</div>
						<el-button @click="play" id="play" slot="reference" :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'" circle></el-button>
					</el-popover>
				</el-col>
				<el-col :span="14" style="padding-left: 20px">
					<el-slider @change="changeTime" :format-tooltip="formatTime" :max="music.maxTime" v-model="music.currentTime" style="width: 100%;"></el-slider>
				</el-col>
				<el-col :span="6" style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px">
					{{formatTime(music.currentTime)}}/{{formatTime(music.maxTime)}}
				</el-col>
			</el-row>
			<audio ref="music" loop autoplay>
				<source src="../../assets/01.mp3" type="audio/mpeg">
			</audio>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				music: {
					isPlay: false,
					currentTime: 0,
					maxTime: 0,
					volume: 100
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				setInterval(this.listenMusic, 1000)
			})
		},
		methods: {
			listenMusic() {
				if(!this.$refs.music) {
					return
				}
				if(this.$refs.music.readyState) {
					this.music.maxTime = this.$refs.music.duration
				}
				this.music.isPlay = !this.$refs.music.paused
				this.music.currentTime = this.$refs.music.currentTime
			},
			play() {
				if(this.$refs.music.paused) {
					this.$refs.music.play()
				} else {
					this.$refs.music.pause()
				}
				this.music.isPlay = !this.$refs.music.paused
				this.$nextTick(() => {
					document.getElementById('play').blur()
				})
			},
			changeTime(time) {
				this.$refs.music.currentTime = time
			},
			changeVolume(v) {
				this.music.volume += v
				if(this.music.volume > 100) {
					this.music.volume = 100
				}
				if(this.music.volume < 0) {
					this.music.volume = 0
				}
				this.$refs.music.volume = this.music.volume / 100
			},
			formatTime(time) {
				let it = parseInt(time)
				let m = parseInt(it / 60)
				let s = parseInt(it % 60)
				return(m < 10 ? "0" : "") + parseInt(it / 60) + ":" + (s < 10 ? "0" : "") + parseInt(it % 60)
			}
		}
	}
</script>

<style>
	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		transform: translateX(10px);
		opacity: 0;
	}
</style>