<template lang='pug'>
	div
		h1 111
		h2 222
		ul
			li(v-for="item in arr") 姓名： {{item.name}} 
		p 111
		div(v-for="a in arry") 年龄： {{a.age}}
</template>

<script>
	export default{
		data(){
			return {
				picLyanzhengma:'',
				show:true,
				arr:[
					{name:'1'},
					{name:'2'},
					{name:'3'},
					{name:'4'},
				],
				arry:[
					{age:12},
					{age:13},
					{age:14},
				]
			}
		},
		methods:{
		}
	}
</script>

<style scoped >
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
	}
</style>