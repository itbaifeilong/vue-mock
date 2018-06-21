<template>
	<div>
		个人中心<br/> 
		<h1>-----动态路由传来的名字和ID-----</h1>
		<p>名字：{{ $route.params.username}}</p>
		<p>ID：{{$route.params.post_id}}</p>
		<div>
			<!--<h1>--------state--------</h1>
			<p>{{num}}</p>
			<p>
			    <button @click="increment">+</button>
			    <button @click="decrement">-</button>
		  </p>
		  
		  
			<h1>--------getters---------</h1>
			<ul>
				<li v-for="item in newArr">{{item}}</li>
			</ul>-->
			
		</div>
	</div>
</template>

<script>
//	import {mapState,mapGetters} from "vuex"
	export default {
		data() {
			return {

			}
		},
		//计算属性
		computed: {
			//原始写法
//			count() {
//				return this.$store.state.count
//			},
		 //state简便写法
			...mapState({
				num:'count'
			}),
			//原始写法
//			arrList () {
//		    		return this.$store.getters.arrList;
//		  	},
				//getters简便写法
			  ...mapGetters({
			  	newArr:'arrList'
			  })
		},
		methods: {
			increment() {
				this.$store.commit('increment')
			},
			decrement() {
				this.$store.commit('decrement')
			},
			add(){
				this.$store.dispatch('increment').then((data) => {
					console.log(data,'312312');
			})
			}
		},
		mounted(){
			this.add()
		}
	}
</script>

<style>
li{
	list-style:none;
}
</style>