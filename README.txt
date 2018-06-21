/*****************适合新手学习*****************/
整体通过element-ui搭建内容框架，通过mock.js实现模拟数据，调取模拟接口实现数据展示，增删改查功能。


//****************项目搭建步骤
	***提示：安装node.js***
1.初始化
	--- npm init
2.全局安装
	--- npm install -g vue-cli
3.创建项目
	---- vue init webpack vue-demo  
4.下载依赖
	--- npm install   (下载速度慢，推荐使用淘宝镜像)
5.安装依赖
	--- 各种依赖  （比如：axios，vuex，mock，element-ui等等。根据自己需求下载）
5.启动
	--- npm run dev  （npm start）
	
6.打包
	---npm run build
7.主要运用技术栈
	vuex	 + axios + vue-router + mock + echarts + element-ui + webpack
	
//*****************************
主要依赖mock.js进行数据模拟，接口调用
实现功能：
	1.登陆，注册
	2.数据展示
	3.用户数据的增，删，查，（编辑在努力。。。。）
	4.echarts 简单实现。  (echarts网址：http://echarts.baidu.com/examples/#chart-type-bar)
	5.路由按需加载，动态路由，重定向，别名，都有涉及
	6.vuex的state，getters，muation，action，简单实现。

//*****************************
项目的主要文件夹的意思
	src/components/data      		数据（用户表1，用户表2）
	src/components/login		 		登陆
	src/components/people	 		首页 （个人中心，修改资料）
	src/components/create    		echatrs  购物车
	src/components/HelloWorld.vue   首页容器
	src/mock      			 		模拟数据接口 
	src/router				 		路由
	src/store				 		vuex状态管理
	src/assets/js 			 		cookie设置（保存，获取，删除）

