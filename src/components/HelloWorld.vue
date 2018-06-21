<template>
	<el-container style="height: 500px; border: 1px solid #eee" v-loading="loading">
		<el-aside style="background-color: rgb(238, 241, 246)">
			<el-header>
				{{table.header}}
			</el-header>
			<el-menu :default-openeds="['1','2', '3']" :default-active="$route.path">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>{{table.homey}}</template>
					<el-menu-item-group>
						<template slot="title">{{table.title1}}</template>
						<el-menu-item index="1-1">
							<router-link to="/Personal/evan/post/123">{{table.people}}</router-link>
						</el-menu-item>
						<el-menu-item index="1-2">
							<router-link to="/Add/oo">{{table.add}}</router-link>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>{{table.data}}</template>
					<el-menu-item-group>
						<template slot="title">{{table.title}}</template>
						<el-menu-item index="2-1">
							<router-link :to="{name:'dataone',params:{id:123}}">{{table.dataone}}</router-link>
						</el-menu-item>
						<el-menu-item index="2-2">
							<router-link to="/datatwo">{{table.datatwo}}</router-link>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title"><i class="el-icon-setting"></i>图标</template>
					<el-menu-item-group>
						<template slot="title">echat</template>
						<el-menu-item index="3-1">
							<router-link to="/HelloWorld/eqweqw">图表一</router-link>
						</el-menu-item>
						<el-menu-item index="3-2">
							<router-link to="/gwc">购物车</router-link>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>

		<el-container>
			<el-header style="text-align: right; font-size: 12px">
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 15px"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<template>
								<el-button type="text" @click="get">{{table.get}}</el-button>
							</template>
						</el-dropdown-item>
						<el-dropdown-item @clcik="add">
							<template>
								<el-button type="text" @click="add">{{table.addme}}</el-button>
							</template>
						</el-dropdown-item>
						<el-dropdown-item @click="del">
							<template>
								<el-button type="text" @click="del">{{table.del}}</el-button>
							</template>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span>{{name}}</span>
			</el-header>

			<el-main>
				<router-view></router-view>

			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	//	import axios from 'axios'
	import { setCookie, getCookie, delCookie } from '../assets/js/cook.js'
	export default {
		data() {

			return {
				table: '',
				name: '',
				loading: true
			}
		},
		created() {
			//mock模拟接口，传数据
			this.$axios.get('/api/data').then(data => {
				this.table = data.data.data;
				this.loading = false;
			});
			//mock模拟接口，传数据
			this.$axios.get('/api/url').then(data => {
				//				console.log(data,'url');
			})
		},
		mounted() {
			/*页面挂载获取保存的cookie值，渲染到页面上*/
			let uname = getCookie('username')
			this.name = uname
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == "") {
				this.$router.push('/')
			}
		},
		methods: {
			get() {
				console.log('我是查看')
				alert('我是查看')
			},
			add() {
				console.log('我是修改')
				alert('我是修改')
			},
			del() {
				//				console.log('我是退出')
				delCookie('username')
				this.$router.push('/')

			}
		}
	};
</script>
<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
	
	a {
		text-decoration: none;
		color: black;
	}
</style>