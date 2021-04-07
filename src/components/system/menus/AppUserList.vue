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
				dataUrl: 'http://121.43.158.185:8082/system/appUser/appUserList'
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
