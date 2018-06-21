<template>
	<el-table :data="table" height="250" border style="width: 100%;height: 290px;">
		<el-table-column prop="date" label="日期" width="180">
		</el-table-column>
		<el-table-column prop="name" label="姓名" width="180">
		</el-table-column>
		<el-table-column prop="address" label="地址" align='left'>
		</el-table-column>
	</el-table>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				table: []
			}
		},
		created() {
			//mock模拟接口，传数据
			axios.get('/api/ul').then(data => {
				console.log(data);
				this.table = data.data.data;
				console.log(this.table)
			});
		},
	}
</script>

<style>

</style>