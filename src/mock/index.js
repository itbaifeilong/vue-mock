const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
	return {
		data: {
			header: "简简单单",

			homey: "首页",
			title1: "分组一",
			people: "个人中心",
			add: "修改资料",

			data: "数据",
			title: "分组二",
			dataone: "用户表一",
			datatwo: "用户表二",

			myname: "白飞龙",

			get: "查看",
			addme: "修改",
			del: "退出"

		}
	}
});
Mock.mock('/api/url', (req, res) => {
	return {
		data: {
			id: 1,
			licNumber: '陕A79898',
			color: 1,
			buyTime: '2017-04-01'

		}
	}
});
Mock.mock('/api/ul', (req, res) => {
	return {
		data: [{
			date: '2016-05-02',
			name: '张三',
			address: '上海市普陀区金沙江路 1511 弄'
		}, {
			date: '2017-05-04',
			name: '李四',
			address: '上海市普陀区金沙江路 1512 弄'
		}, {
			date: '2018-05-01',
			name: '王五',
			address: '上海市普陀区金沙江路 1513 弄'
		}, {
			date: '2019-05-03',
			name: '赵六',
			address: '上海市普陀区金沙江路 1514 弄'
		}, {
			date: '2100-05-03',
			name: '马七',
			address: '上海市普陀区金沙江路 1515 弄'
		}]
	}
});
Mock.mock('/api/datatwo', (req, res) => {
	return {
		data: [{
			date: '2016-05-03',
			name: '张三',
			province: '上海',
			city: '普陀区',
			address: '上海市普陀区金沙江路 1518 弄',
			zip: 200332
		}, {
			date: '2016-05-02',
			name: '李四',
			province: '北京',
			city: '普陀区',
			address: '上海市普陀区金沙江路 1518 弄',
			zip: 200333
		}, {
			date: '2016-05-04',
			name: '王五',
			province: '天津',
			city: '普陀区',
			address: '上海市普陀区金沙江路 1518 弄',
			zip: 200334
		}, {
			date: '2016-05-01',
			name: '赵六',
			province: '澳门',
			city: '普陀区',
			address: '上海市普陀区金沙江路 1518 弄',
			zip: 200335
		}]
	}
});

Mock.mock('/api/user', (req, res) => {
	return {
		data: [{
			"username": "admin",
			"password": "123456"
		} ,{
			"username": "target",
			"password": "123456"
		},{
			"username": "白飞龙",
			"password": "123456"
		}]
	}
});

Mock.mock('/api/register', (req, res) => {
	return {
		data: [{
			"username": '',
			"password": ''
		}]
	}
});
Mock.mock('/api/gwc', (req, res) => {
	return {
		list: [{
				id: 1,
				name: "打火机",
				price: 3,
				number: 4,
				checked: false,
				num: 1,
				remove: false
			},
			{
				id: 2,
				name: "冰淇淋",
				price: 10,
				number: 3,
				checked: false,
				num: 1,
				remove: false
			},
			{
				id: 3,
				name: "哈根达斯",
				price: 7,
				number: 5,
				checked: false,
				num: 1,
				remove: false
			}
		],
	}
});
//数据分离。
import data from './json.js'
Mock.mock('/api/cesi','post',data.data);
