<template>
	<div>
		<div class="addTodo">
			<input type="text" name="" v-model.trim="todoText">
			<button @click="addTodo">增加</button>
		</div>
		<div class="select-section">
			<p class="space"></p>
			<span :class="{ 'select-type': selected == '0' , 'select': true }" @click="selectType('0')">全部</span>
			<span :class="{ 'select-type': selected == '1' , 'select': true}" @click="selectType('1')">已完成</span>
			<span :class="{ 'select-type': selected == '2' , 'select': true}" @click="selectType('2')">未完成</span>
		</div>
		<div class="todoList">
			<p v-for="todo in todoList" class="todoItem">
				<span class="radio" @click="doneTodo(todo.id)">点击(有线条为已做，反之)</span><span :class="{ 'isDone': todo.isDone }">{{todo.text}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			todoList: function() {
				let selected = this.$store.state.todo.selected;
				if(selected == '0') {
					return this.$store.state.todo.todoList;
				} else if(selected == '1') {
					return this.$store.getters.filterDoned; //根据不同类型的选择，返回不同todolist
				} else if(selected == '2') {
					return this.$store.getters.filterNoDoned;
				}
			},
			selected: function() {
				return this.$store.state.todo.selected;
			},
		},
		data() {
			return {
				todoText: ''
			}
		},
		methods: {
			addTodo: function() {
				this.$store.dispatch('addTodo', this.todoText);
				this.todoText = '';
			},
			doneTodo: function(id) {
				this.$store.dispatch('doneTodo', id);
			},
			selectType: function(type) {
				if(type) {
					this.$store.dispatch('selectType', type);
				}
			}
		}
	}
</script>

<style>
	input {
		width: 200px;
		height: 35px;
		border-radius: 2px;
		border: 1px solid #a5a5a5;
		margin-top: 10px;
		padding-left: 5px;
	}
	
	button {
		width: 90px;
		height: 37px;
		background-color: #42b983;
		color: white;
		border-radius: 2px;
		border: 1px solid #42b983;
	}
	
	.addTodo {
		width: 310px;
		height: 40px;
		margin: 0 auto  50px;
	}
	
	.todoList {
		width: 290px;
		min-height: 140px;
		margin: 40px auto;
		padding-left: 5px;
		padding-top: 5px;
		margin-top: 20px;
		margin-bottom: 50px;
	}
	
	.todoItem {
		width: 95%;
		height: 20px;
		border-bottom: 1px solid #b8b8bf;
		padding-bottom: 5px;
	}
	
	.radio {
		display: inline-block;
		width:200px;
		height: 15px;
		float: left;
		border: none;
	}
	
	.todoItem:hover {
		color: black;
	}
	
	.radio:hover {
		color: red;
	}
	
	.isDone {
		text-decoration: line-through;
	}
	
	.select-type {
		background-color: #42b983;
		color: white;
	}
	
	.select {
		display: inline-block;
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		margin-top: 10px;
	}
	
	.select-section {
		width: 300px;
		height: 40px;
		margin: 0 auto;
		margin-top: -40px;
	}
</style>