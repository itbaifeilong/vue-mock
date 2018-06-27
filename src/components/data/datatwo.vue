<template>
	<el-container>
		<el-header align="left">
			<el-button type="primary" size="small" @click="addBind()">添加</el-button>
			<input type="text" v-model="select" placeholder="请输入查询内容"  class="text1"/>
			<el-button type="success" @click="cx()" size="small">查询</el-button>
		</el-header>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="date" label="日期" width="150" sortable>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" align='center'>
			</el-table-column>
			<el-table-column prop="province" label="省份" width="120" align='center'>
			</el-table-column>
			<el-table-column prop="city" label="市区" width="120" align='center'>
			</el-table-column>
			<el-table-column prop="address" label="地址" width="300" align='center'> 
			</el-table-column>
			<el-table-column prop="zip" label="邮编" width="120" align='center'>
			</el-table-column>
			<el-table-column  label="操作" width="167"align='center'>
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<!--<el-button type="text" size="small" @click="addClick(scope.row)">编辑</el-button>-->
					<el-button type="text" size="small" @click="deletel(scope.row)">删除</el-button>
				</template>
			</el-table-column>
			<!--查看-->
			<el-dialog custom-class="el-dialog-height" title="用户信息" :visible.sync="dialogVisible" append-to-body>
				
				<kd-jsoneditor v-loading="dialogLoading" :data="jsonData"></kd-jsoneditor>
			</el-dialog>
			<!--查询-->
			<el-dialog custom-class="el-dialog-height" title="查询到的用户信息" :visible.sync="cxVal" append-to-body>
				
				<kd-jsoneditor v-loading="dialogLoading" :data="cxdata"></kd-jsoneditor>
			</el-dialog>
			<!--添加-->
			<el-dialog title="添加" :visible.sync="tianjia" append-to-body>
				<el-form :model="form" :data='add'>
					<el-form-item label="日期：" :label-width="formLabelWidth">
						<el-input :placeholder="add.date" v-model="form.data" auto-complete="off">
						</el-input>
					</el-form-item>
					<el-form-item label="姓名：" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off" :placeholder="add.name"></el-input>
					</el-form-item>
					<el-form-item label="省份:" :label-width="formLabelWidth">
						<el-input v-model="form.sf" auto-complete="off" :placeholder="add.province"></el-input>
					</el-form-item>
					<el-form-item label="市区:" :label-width="formLabelWidth">
						<el-input v-model="form.sq" auto-complete="off" :placeholder="add.city"></el-input>
					</el-form-item>
					<el-form-item label="地址:" :label-width="formLabelWidth">
						<el-input v-model="form.dz" auto-complete="off" :placeholder="add.address"></el-input>
					</el-form-item>
					<el-form-item label="邮编:" :label-width="formLabelWidth">
						<el-input v-model="form.yb" auto-complete="off" :placeholder="add.zip"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="quxiao">取 消</el-button>
					<el-button type="primary" @click="ok()">确 定</el-button>
				</div>
			</el-dialog>
		</el-table>
		
		
		<el-table :data="cxdata" border style="width: 100%">
			<el-table-column fixed prop="date" label="日期" width="150" sortable>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" align='center'>
			</el-table-column>
			<el-table-column prop="province" label="省份" width="120" align='center'>
			</el-table-column>
			<el-table-column prop="city" label="市区" width="120" align='center'>
			</el-table-column>
			<el-table-column prop="address" label="地址" width="300" align='center'> 
			</el-table-column>
			<el-table-column prop="zip" label="邮编" width="120" align='center'>
			</el-table-column>
			
			</el-table>
	</el-container>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				select:'',
				cxVal:false,
				cxdata:[],
				tableData: [],
				dialogLoading: false,
				dialogVisible: false,
				jsonData: null,
				dialogFormVisible: false,
				tianjia: false,
				add: {},
				form: {
					name: '',
					data: '',
					sf: '',
					sq: '',
					yb: '',
					dz: '',

				},
				formLabelWidth: '120px'

			}
		},
		computed:{
			
		},
		methods: {
			handleClick(row) {
//				console.log(row);
				this.dialogVisible = true;            
				this.dialogLoading = true;
				axios.get('/api/datatwo').then(data => {
					this.dialogLoading = false;
					this.jsonData = row;
				})
			},
			deletel(row) {

				var id = row.zip;
				for(var i = 0; i < this.tableData.length; i++) {
					if(id == this.tableData[i].zip) {
						this.tableData.splice(i, 1);
					}
				}

			},
			addBind() {
				this.tianjia = true;

			},
			cxc(){
				
			},
			cx(){
				this.cxdata = []
				var cx = this.select;
				for(var i=0;i<this.tableData.length;i++){
					if(cx ==this.tableData[i].name || cx ==this.tableData[i].zip ||cx ==this.tableData[i].province ){

						this.cxdata.push(this.tableData[i]);
						console.log(this.cxdata)
						break
					}
				}
			},
			ok() {
				var obj = {
					name: this.form.name,
					date: this.form.data,
					province: this.form.sf,
					city: this.form.sq,
					zip: this.form.yb,
					address: this.form.dz
				}
				this.tableData.push(obj)
				this.tianjia = false;
				console.log(this.tableData)
				this.form.name = "";
				this.form.data = "";
				this.form.sf = "";
				this.form.sq = "";
				this.form.yb = "";
				this.form.dz = ""
			},
			quxiao() {
				this.tianjia = false;
				this.form.name = "";
				this.form.data = "";
				this.form.sf = "";
				this.form.sq = "";
				this.form.yb = "";
				this.form.dz = ""
			},
		},
		created() {
			axios.get('/api/datatwo').then(data => {
				this.tableData = data.data.data
			})


		}
	}
</script>
<style scoped>
.text1{
	width: 100px;
	height: 28px;
}
</style>