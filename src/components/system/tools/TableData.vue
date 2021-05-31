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
					<tr v-if="allDataNumber != 0">
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
			<div v-if="allDataNumber != 0" class="table_left_number_info">
				<div v-if="allDataNumber <= 10">
					显示第1到{{allDataNumber}}条记录，总共{{allDataNumber}}条记录
				</div>
				<div v-else class="table_left_more_number">
					<span>显示第{{localStartPageNumber}}到{{localEndPageNumber}}条记录，总共{{allDataNumber}}条记录，每页显示</span>
					<div class="table_left_select_box">
						<div class="table_left_select_content">
							<span>{{everyPageNumber}}</span>
							<img src="../../../assets/system/table/up_arrow.png" />
						</div>
						<div class="select_box_dropup_content">
							<div v-for="item in selectPageNumList" class="select_box_dropup_row" @click="changeEveryPageNumber(item)">{{item}}</div>
						</div>
					</div>
					<span>条记录</span>
				</div>
			</div>
			<div v-if="allPageNumber > 1" class="table_right_page_info">
				<div class="table_right_square" @click="activePageMove(-2)">
					<img src="../../../assets/system/table/left_double_arrow.png"/>
				</div>
				<div class="table_right_square" @click="activePageMove(-1)">
					<img src="../../../assets/system/table/left_arrow.png"/>
				</div>
				<div v-if="allPageNumber <= 5" v-for="index in allPageNumber" :class="index == activePageNumber ? 'table_right_square_active':'table_right_square_num'" @click="changeActivePageNumber(index)">
					{{index}}
				</div>
				<div v-if="allPageNumber > 5" v-for="index in changePageRangeList" :class="index == activePageNumber ? 'table_right_square_active':'table_right_square_num'" @click="changeActivePageNumber(index)">
					{{index}}
				</div>
				<div class="table_right_square" @click="activePageMove(1)">
					<img src="../../../assets/system/table/right_arrow.png"/>
				</div>
				<div class="table_right_square" @click="activePageMove(2)">
					<img src="../../../assets/system/table/right_double_arrow.png"/>
				</div>
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
				receiceData: [],			//接口接收的所有数据
				allSelectFlag: false,		//checkbox全选标志位
				localStartPageNumber: 0,		//当页的开始数据条数
				localEndPageNumber: 0,		//当页的结束数据条数
				everyPageNumber: 10,		//每页的数据条数 
				allPageNumber: 0,			//所有的页数
				allDataNumber: 0,			//所有的数据条数
				selectPageNumList: [10, 25, 50, 100],		//每页记录条数设置的列表
				activePageNumber: 1,		//当前活跃的页数
				changePageRangeList: [1, 2, 3, 4, 5]			//总页数超过5页时的最大显示页数
			}
		},
		mounted() {
			this.$axios.get(this.dataUrl).then((res) => {
				// console.log(res.data);
				this.allDataNumber = res.data.data.total;
				if(this.allDataNumber % this.everyPageNumber == 0) {
					this.allPageNumber = this.allDataNumber / this.everyPageNumber;
				}else {
					this.allPageNumber = parseInt(this.allDataNumber / this.everyPageNumber) + 1;
				}
				this.tableContentChange();
			});
		},
		methods: {
			checkboxChanged() {		//总checkbox的状态改变函数
				this.allSelectFlag = !this.allSelectFlag;
			},
			dataModify(item) {		//点击某个数据修改按钮
				console.log(item);
			},
			dataDelete(item) {		//点击某个数据删除按钮
				console.log(item);
			},
			changeEveryPageNumber(item) {		//改变每一页的数据条数
				this.everyPageNumber = item;
				//重新设置总页数
				if(this.allDataNumber % this.everyPageNumber == 0) {
					this.allPageNumber = this.allDataNumber / this.everyPageNumber;
				}else {
					this.allPageNumber = parseInt(this.allDataNumber / this.everyPageNumber) + 1;
				}
				//如果之前活跃的某页数已经超过更新的总页数，则将活跃的页数设置为最后一页
				if(this.activePageNumber > this.allPageNumber) { 
					this.activePageNumber = this.allPageNumber;
				}
				this.tableContentChange();			//更新表格内容
			},
			changeActivePageNumber(index) {			//切换活跃的页面函数
				this.pageRangeChage(index);			//改变分页的页面范围函数
				this.activePageNumber = index;
				this.tableContentChange();			//更新表格内容
			},
			tableContentChange() {			//更新表格内容
				this.$axios.get(this.dataUrl+ '?limit=' + this.everyPageNumber.toString() + '&offset=' + ((this.activePageNumber - 1) * this.everyPageNumber).toString()).then((res) => {
					this.receiceData = res.data.data.rows;
					this.localStartPageNumber = (this.activePageNumber - 1) * this.everyPageNumber + 1;
					if((this.allDataNumber - this.activePageNumber * this.everyPageNumber) > 0) {
						this.localEndPageNumber = (this.activePageNumber - 1) * this.everyPageNumber + this.everyPageNumber;
					}else {			//最后一页时
						this.localEndPageNumber = this.allDataNumber;
					}
				});
			},
			activePageMove(type) {		//左右单箭头与双箭头切换活跃页面的函数
				if(type == -1 && this.activePageNumber > 1) {		//点击左单箭头时
					this.pageRangeChage(this.activePageNumber - 1);
					this.activePageNumber--;
				}else if(type == 1 && this.activePageNumber < this.allPageNumber) {		//点击右单箭头时
					this.pageRangeChage(this.activePageNumber + 1);
					this.activePageNumber++;
				}else if(type == -2 && this.activePageNumber > 1) {		//点击左双箭头时
					if(this.allPageNumber > 5) this.changePageRangeList = [1, 2, 3, 4, 5];
					this.activePageNumber = 1;
				}else if(type == 2 && this.activePageNumber < this.allPageNumber) {		//点击右双箭头时
					if(this.allPageNumber > 5) {
						for(let i = 0; i < this.changePageRangeList.length; i++) {
							this.changePageRangeList[i] = this.allPageNumber - 4 + i;
						}
					}
					this.activePageNumber = this.allPageNumber;
				}
				this.tableContentChange();
			},
			pageRangeChage(index) {			//改变分页的页面范围函数
				//点击的index左边或右边存在2个数的情况时
				if((index + 2 <= this.allPageNumber && index - 2 >= 1)) {
					let tempNum = this.changePageRangeList[2];
					for(let i = 0; i < this.changePageRangeList.length; i++) {
						this.changePageRangeList[i] += index - tempNum;
					}
				}
				//点击的index左边只存在一个数的情况，单独考虑，只向左移一位
				if(index == this.changePageRangeList[0] && index > 1) {
					for(let i = 0; i < this.changePageRangeList.length; i++) {
						this.changePageRangeList[i] -= 1;
					}
				}
				//击的index右边只存在一个数的情况，单独考虑，只向右移一位
				else if(index == this.changePageRangeList[4] && index < this.allPageNumber) {
					for(let i = 0; i < this.changePageRangeList.length; i++) {
						this.changePageRangeList[i] += 1;
					}
				}
			}
		}
	}
</script>

<style>
</style>
