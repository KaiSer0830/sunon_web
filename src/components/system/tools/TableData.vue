<template>
	<div class="table_containter">
		<div class="table_head">
			<div class="table_button_box">
				<span class="table_button_box_word">+</span>添加
			</div>
			<div class="table_input_box">
				<input class="table_input_frame" />
				<div class="table_input_frame_button">查询</div>
			</div>
		</div>
		<div class="table_content">
			<table class="table table-bordered table-hover table-striped">
				<thead>
					<tr v-if="allPageNumber != 0">
						<th>
							<input type="checkbox" @click="checkboxChanged()"></input>
						</th>
						<th v-for="(item, key, index) in receiceData[0]">{{key}}</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr  v-for="(item, index) in receiceData" class="active">
						<td>
							<input type="checkbox" :checked="allSelectFlag"></input>
						</td>
						<td v-for="(subItem, subIndex) in item">{{subItem}}</td>
						<td class="operate_button">
							<div class="modify_button">
								<img src="../../../assets/system/table/modify.png" @click="dataModify(item)"/>
							</div>
							<div class="delete_button">
								<img src="../../../assets/system/table/delete.png"  @click="dataDelete(item)"/>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="table_bottom">
			<div v-if="allPageNumber != 0" class="table_left_number_info">
				<div v-if="allPageNumber <= 10">显示第1到{{allPageNumber}}条记录，总共{{allPageNumber}}条记录</div>
				<div v-else class="table_left_more_number">
					<span>显示第1到{{allPageNumber}}条记录，总共{{allPageNumber}}条记录，每页显示</span>
					<div class="table_left_select_box">
						<div class="table_left_select_content">
							<span>{{everyPageNumber}}</span>
							<img src="../../../assets/system/table/up_arrow.png" />
						</div>
						<div class="select_box_dropup_content">
							<div v-for="item in selectPageNumList" class="select_box_dropup_row" @click="changeEveryPageNuber(item)">{{item}}</div>
						</div>
					</div>
					<span>条记录</span>
				</div>
			</div>
			<div class="table_right_page_info">
				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		props: {
			dataUrl: {
				type: String,
				default: 'http://121.43.158.185:8082/system/company/companyList'
			},
		},
		data() {
			return {
				receiceData: null,
				allSelectFlag: false,
				localPageNumber: 10,
				everyPageNumber: 10,
				allPageNumber: 0,
				selectPageNumList: [10, 25, 50, 100]
			}
		},
		mounted() {
			this.$axios.get(this.dataUrl).then((res) => {
				// console.log(res.data);
				this.allPageNumber = res.data.data.total;
				this.receiceData = res.data.data.rows;
				// console.log(this.receiceData);
			});
		},
		methods: {
			checkboxChanged() {
				this.allSelectFlag = !this.allSelectFlag;
			},
			dataModify(item) {
				console.log(item);
			},
			dataDelete(item) {
				console.log(item);
			},
			changeEveryPageNuber(item) {
				this.everyPageNumber = item;
			}
		}
	}
</script>

<style>
</style>
