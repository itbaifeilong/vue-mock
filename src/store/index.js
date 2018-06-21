import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new 	Vuex.Store({
	state:{
		count:0,
		todos:[
			{id:1,name:'张三',score:80},
			{id:2,name:'李四',score:50},
			{id:3,name:'王五',score:69},
		]
	},
	mutations:{
		increment(state){
			state.count++
		},
		decrement(state){
			state.count--
		}
	},
	actions: {
	  increment ({ commit }) {
	    commit('increment')
	  }
	},
	getters:{
		arrList(state){
			return state.todos.map(function(item){
				return item.score>=60?'及格':"不及格";
			})
		}
	}
})

export default store