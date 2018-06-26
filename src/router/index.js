import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myvuex from '@/components/myvuex'
import headerComponent from '@/components/headerComponent'

//import Mock from '@/components/mock'
//import Add from '@/components/people/add.vue'
import Personal from '@/components/people/personal.vue'
import Login from '@/components/login/login.vue'
import dataone from '@/components/data/dataone.vue'
import datatwo from '@/components/data/datatwo.vue'
import datathree from '@/components/data/datathree.vue'
import echart1 from '@/components/create/echart1.vue'
import gwc from '@/components/create/gwc'
import create from '@/components/add/create.vue'

//按需加载，没有指定webpackChunkName，每个组件打包成一个js文件
const Add = () => import('@/components/people/add.vue')
import Cookies from 'js-cookie';
Vue.use(Router)
import {getCookie} from '../assets/js/cook.js'
export default new Router({
  routes: [
  	{
  		path:'/',
  		name:'Login',
  		component:Login,
  	},
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      //跳转拦截
      beforeEnter: (to, from, next) => {
		        var token = getCookie('username');
			 	console.log('token:',token)
			   	if(token){
			   	 	next()
			   	}else{
			   		next({ path: '/' })
			   	}
	},
      children:[
      	 {
	      	 path: '/Add/:id',
	     	 name: 'Add',
	      	component: Add
	      },
	      {
	      	path: '/Personal/:username/post/:post_id',
	     	name: 'Personal',
	      	component: Personal
	      } ,
	      {
		    	path: '/dataone/:id',
		    name: 'dataone',
		    	component: dataone,
		   } ,
		   {
		    	path: '/datatwo',
//		    	redirect:{name:'echart1'},		//重定向
		    name: 'datatwo',
		    	component: datatwo,
		   },
		   {
		    	path: '/echart1',
		    name: 'echart1',
		    	component: echart1,
		    alias: 'eqweqw'	,//别名
		   },
		   {
		   	path:'/create',
		   	component:create,
		   },
		   {
		   	path:'/gwc',
		   	component:gwc,
		   },
		   {
		   	path:'/myvuex',
		   	component:myvuex,
		   },
		   {
		   	path:'/datathree',
		   	component:datathree,
		   }
		   ,{
		   	path:'/headerComponent',
		   	component:headerComponent
		   }
      
      ]
    }, 
  ]
})
