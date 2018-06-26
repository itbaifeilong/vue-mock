<template>
	<div>
		<div class="login-wrap" v-show="showLogin">
			<h3>登录</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<input type="password" placeholder="请输入密码" v-model="password">
			<input type="text" placeholder="请输入验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
			<p v-show="showYzm">{{yzm}}</p>
			<input type="button" id="code" @click="createCode"  class="verification1" v-model="checkCode"/> <br>
			<button v-on:click="login">登录</button>
			<span v-on:click="ToRegister">没有账号？马上注册</span>
			
			<div style="margin-top: 20px;">
				<div>登陆账号：<span style="color: red;">admin</span>&nbsp;&nbsp;&nbsp;登陆密码：<span style="color: red;">123456</span></div>
				<div>登陆账号：<span style="color: red;">target</span>&nbsp;&nbsp;&nbsp;登陆密码：<span style="color: red;">123456</span></div>
				<div>登陆账号：<span style="color: red;">白飞龙</span>&nbsp;&nbsp;&nbsp;登陆密码：<span style="color: red;">123456</span></div>
			</div>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h3>注册</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="newUsername">
			<input type="password" placeholder="请输入密码" v-model="newPassword">
			<input type="text" placeholder="请输入验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
			<p v-show="showYzm">{{yzm}}</p>
			<input type="button" id="code" @click="createCode"  class="verification1" v-model="checkCode"/> <br>
			<button v-on:click="register">注册</button>
			<span v-on:click="ToLogin">已有账号？马上登录</span>
		</div>
	</div>
</template>

<script>
	var code ;//全局定义验证码
	import { setCookie, getCookie } from '../../assets/js/cook.js'
	export default {
		data() {
			return {
				picLyanzhengma:'',
				checkCode:'',
				showLogin: true,
				showRegister: false,
				showTishi: false,
				showYzm:false,
				tishi: '',
				yzm:'',
				username: '',
				password: '',
				newUsername: '',
				newPassword: '',
				user:[],
			}
		},
		created(){
		this.createCode();	
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')) {
				this.$router.push('/HelloWorld')
			}
		},
		methods: {
			//验证码
			createCode(){
				 code = "";    
		          var codeLength = 4;//验证码的长度   
		          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
		           'S','T','U','V','W','X','Y','Z');//随机数   
		          for(var i = 0; i < codeLength; i++) {//循环操作   
		              var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
		              code += random[index];//根据索引取得随机数加到code上   
		         	 }   
		             this.checkCode = code;//把code值赋给验证码   
			},
			//失去焦点
			checkLpicma(){
				this.picLyanzhengma.toUpperCase();
				if(this.picLyanzhengma ==""){
					this.yzm ="请输入验证码"
					this.showYzm = true
				}else if(this.picLyanzhengma.toUpperCase()!=this.checkCode){
					this.yzm ="验证码输入错误"
					this.showYzm = true
				}
			},
			login() {
				if(this.username == "" || this.password == "") {
					alert("请输入用户名或密码")
				} else {
					let data = {
						'username': this.username,
						'password': this.password
					}
					//通过mock模拟数据实现登陆判断，进行cookie保存
					this.$axios.post('/api/user').then((res) => {
						var name = this.username;
						var password = this.password;
						this.user = res.data.data;
						for(var i =0;i<this.user.length;i++){
							if(name == this.user[i].username&&password == this.user[i].password){
								this.tishi = "登录成功"
								this.showTishi = true
								setCookie('username', this.user[i].username, 1000 * 60)
								this.$router.push('/HelloWorld')
							}else{
								this.tishi = "用户名密码错误"
								this.username = "";
								this.password = "";
								this.showTishi = true
								this.picLyanzhengma =""
								this.showYzm = false
								//刷新验证码
								this.createCode();	
							}
						}
					})
				}
			},
			
			ToRegister() {
				this.showRegister = true
				this.showLogin = false
			},
			register() {
				if(this.newUsername == "" || this.newPassword == "") {
					alert("请输入用户名或密码")
				} else {
					let data = {
						'username': this.newUsername,
						'password': this.newPassword
					}
					//通过mock模拟数据实现注册账号重复判断，进行cookie保存，登陆。
					this.$axios.post('/api/user').then((res) => {
								var newName = this.newUsername;
								var newPassword = this.newPassword;
								this.user =  res.data.data;
								for(var i =0;i<this.user.length;i++){
									if(newName == this.user[i].username&&newPassword == this.user[i].password){
										this.tishi = "用户名存在"
										this.showTishi = true
										this.newUsername = "";
										this.newPassword = "";	
									}else{
										this.tishi = "注册成功"
										this.user.push(data);
										this.showTishi = true
										setCookie('username', data.username, 1000 * 60)
										this.$router.push('/HelloWorld')
									}
								}
								
					})
				}
			},
			ToLogin() {
				this.showRegister = false
				this.showLogin = true
			}
		}
	}
</script>


<style scoped>
	.login-wrap {
		text-align: center;
	}
	
	input {
		display: block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		margin-bottom: 10px;
		outline: none;
		border: 1px solid #888;
		padding: 10px;
		box-sizing: border-box;
	}
	
	p {
		color: red;
	}
	
	button {
		display: block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		border: none;
		background-color: #41b883;
		color: #fff;
		font-size: 16px;
		margin-bottom: 5px;
	}
	
	span {
		cursor: pointer;
	}
	
	span:hover {
		color: #41b883;
	}
	.verification1{
    vertical-align: middle;
    transform: translate(-15px,0);
    width: 102px;
    color: white;
    font-weight: 700;
    line-height:20px;
    font-size: 20px;
    background: -webkit-linear-gradient(left, red , blue,yellow); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, red, blue,yellow); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, red, blue,yellow); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, red , blue,yellow); /* 标准的语法 */
}
</style>