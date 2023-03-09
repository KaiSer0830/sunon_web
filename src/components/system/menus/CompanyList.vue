<template>
	<TableData :dataUrl="dataUrl"></TableData>
</template>

<script>
	import TableData from '../tools/TableData.vue'
	export default {
		components:{
			TableData
		},
		data() {
			return {
				/**********
				自己按前端组件TableData里面的数据格式，从后端拿数据，如数据格式不符合要求，可自定义组件
				后端公司数据返回dataUrl格式如下：{
					"total": 2,
					"rows":[{
						"companyId": 3,
						"companyName": "市交通局",
						"companyCode": "91330105256250759C"
						},
						{"companyId": 2,
						"companyName": "中国石油大学",
						"companyCode": "1233000047000441XK"
						}]
				}
				***************/		
				dataUrl: 'http://121.43.158.185:8082/system/company/companyList'
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
