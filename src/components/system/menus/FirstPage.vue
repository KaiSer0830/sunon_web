<template>
	<div class="first_page_container">
		<div class="one_row_box">
			<!--本年度总设备数量框-->
			<div class="device_box">
				<div class="device_box_title">本年度总设备数量</div>
				<div class="one_row_box_gap"></div>
				<div class="device_box_content">
					<div class="device_box_sum_num_content">
						<span class="device_box_sum_num">25848</span>
						<span class="device_box_sum_num_word">张</span>
					</div>
					<div class="device_box_change_percent">
						<span class="device_box_percent_word">同比上升&nbsp12.5%</span>
						<span class="up_red_arrow"></span>
						<span class="device_box_percent_word">同比下降&nbsp5%</span>
						<span class="down_green_arrow"></span>
					</div>
				</div>
				<div class="one_row_box_gap"></div>
				<div class="device_box_bottom">
					<div class="device_box_bottom_left">
						<span>智能桌</span>
						<div>
							<span class="device_box_bottom_word">400</span>
							<span>张</span>
						</div>
					</div>
					<div class="device_box_straight_line"></div>

					<div class="device_box_bottom_right">
						<span>智能椅</span>
						<div>
							<span class="device_box_bottom_word">200</span>
							<span>张</span>
						</div>
					</div>
				</div>
			</div>

			<!--本月新增用户量框-->
			<div class="new_users_box">
				<div class="new_users_box_title">本月新增用户量</div>
				<div class="one_row_box_gap"></div>
				<div class="new_users_box_content">
					<div class="new_users_box_sum_nums_content">
						<span class="new_users_box_sum_num">258</span>
						<span class="new_users_box_sum_num_word">位</span>
					</div>
				</div>
				<div class="one_row_box_gap"></div>
				<div class="new_users_box_bottom">
					<span>总用户量</span>
					<div>
						<span class="new_users_box_bottom_word">200</span>
						<span>位</span>
					</div>
				</div>
			</div>

			<!--本周登录数量框-->
			<div class="weekend_login_users_box">
				<div class="weekend_login_users_box_title">本周登录数量</div>
				<div class="one_row_box_gap"></div>
				<div class="weekend_login_users_box_content">
					<span>37291</span>
					<div class="weekend_login_users_box_echarts" ref="wave"></div>
				</div>
				<div class="one_row_box_gap"></div>
				<div class="weekend_login_users_box_bottom">
					<span>日登录量</span>
					<span class="weekend_login_users_box_bottom_word">300</span>
				</div>
			</div>
		</div>

		<!-- 访问量趋势图 -->
		<div class="two_row_box">
			<div class="visit_trend_title_box">
				<span class="visit_trend_title_left_box">访问量趋势</span>
				<div class="visit_trend_title_right_box">
					<span v-for="(item, index) in visitTrendTimesList"
						:class="item.status ? 'visit_trend_title_right_box_word_sel':'visit_trend_title_right_box_word'"
						@click="visitTrendTimesClick(item, index)">{{item.title}}</span>
					<div class="visit_trend_data_box">
						<DatePickers holder="开始时间"></DatePickers>
						<img src="../../../assets/system/datepicker_arrow.png" class="visit_trend_data_img"/>
						<DatePickers holder="结束时间"></DatePickers>
						<img src="../../../assets/system/calendar.png" />
					</div>
				</div>
			</div>
			<div class="visit_trend_gap"></div>
			<div class="visit_trend_echart_box" ref="visitTrend"></div>
		</div>

		<div class="three_row_box">
			<div class="device_percent_box">
				<div class="device_percent_title_box">各设备占比</div>
				<div class="three_row_box_gap"></div>
				<div class="device_percent_echart_box" ref="devicePercent"></div>
			</div>
			<div class="active_data_box">
				<div class="active_data_title_box">活跃度数据</div>
				<div class="three_row_box_gap"></div>
				<div class="active_data_echart_box" ref="activeData"></div>
			</div>
		</div>

		<div class="four_row_box">
			<div class="department_bar_box">
				<div class="department_bar_title_box">
					<div class="department_bar_title_left">
						<div v-for="(item, index) in departmentBodyDataList" class="department_bar_title_left_row">
							<span @click="departmentBodyDataClick(item, index)" :class="item.status ? 'department_bar_title_sel':'department_bar_title'">
								{{item.title}}
							</span>
						</div>
					</div>
					<div class="department_bar_title_right">本月</div>
				</div>
				<div class="department_bar_box_gap"></div>
				<div class="department_bar_echart_box" ref="departmentBodyData"></div>
			</div>
			<div class="department_rank_box">
				<div class="department_rank_title_box">
					<div class="department_rank_title_left">排行榜</div>
					<div class="department_rank_title_right">
						<div v-for="(item, index) in departmentRankList" @click="departmentRankDataClick(item, index)" :class="item.status ? 'department_rank_title_right_content_sel':'department_rank_title_right_content'">
							{{item.title}}
						</div>
					</div>
				</div>
				<div class="department_rank_box_gap"></div>
				<div class="department_rank_bottom_content">
					<div v-for="(item, index) in departmentRankList" v-if="item.status" class="department_rank_bottom_content_col">
						<div v-for="(subItem, subIndex) in item.dataList" class="department_rank_bottom_content_row">
							<div class="department_rank_bottom_content_row_left">
								<span :class="subIndex < 3 ? 'department_rank_bottom_content_index_sel':'department_rank_bottom_content_index'">{{subIndex + 1}}</span>
								<span :class="subIndex < 3 ? 'department_rank_bottom_content_title_sel':'department_rank_bottom_content_title'">{{subItem.title}}</span>
							</div>
							<div class="department_rank_bottom_content_row_right">
								{{subItem.value}}
								<span v-if="index == 0">小时</span>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DatePickers from '../tools/DatePickers.vue'
	export default {
		name: 'Wave',
		components: {
			DatePickers
		},
		data() {
			return {
				waveChart: null,
				visitTrendChart: null,
				devicePercentChart: null,
				activeDataChart: null,
				departmentBodyDataChart: null,
				visitTrendTimesList: [{
					title: '本周',
					status: true
				}, {
					title: '本月',
					status: false
				}, {
					title: '全年',
					status: false
				}],
				departmentBodyDataList: [{
					title: '各部门平均心率',
					status: true
				}, {
					title: '各部门疲劳度',
					status: false
				}],
				departmentRankList: [{
					title: '办公时长',
					status: true,
					dataList: [{
						title: '策划部',
						value: 600
					}, {
						title: '市场部',
						value: 580
					}, {
						title: '财务部 ',
						value: 450
					}, {
						title: '法务部',
						value: 400
					}, {
						title: '研发部',
						value: 305
					}, {
						title: '创意部',
						value: 250
					}, {
						title: '预研部',
						value: 100
					}]
				}, {
					title: '坐姿分布',
					status: false,
					dataList: [{
						title: '赵卫',
						value: 258
					}, {
						title: '张大保',
						value: 147
					}, {
						title: '刘程 ',
						value: 122
					}, {
						title: '官小怡',
						value: 103
					}, {
						title: '吴畏',
						value: 99
					}, {
						title: '花凤',
						value: 87
					}, {
						title: '方标',
						value: 85
					}]
				}, {
					title: '桌面高度',
					status: false,
					dataList: [{
						title: '770mm',
						value: 643
					}, {
						title: '750mm',
						value: 632
					}, {
						title: '740mm',
						value: 589
					}, {
						title: '710mm',
						value: 466
					}, {
						title: '760mm',
						value: 305
					}, {
						title: '700mm',
						value: 301
					}, {
						title: '820mm',
						value: 277
					}]
				}],
			}
		},
		props: {

		},
		mounted() {
			this.waveChart = this.$echarts.init(this.$refs.wave);
			window.onresize = this.waveChart.resize;
			this.drawWaveChart();

			this.visitTrendChart = this.$echarts.init(this.$refs.visitTrend);
			window.onresize = this.visitTrendChart.resize;
			this.drawVisitTrendChart1();

			this.devicePercentChart = this.$echarts.init(this.$refs.devicePercent);
			window.onresize = this.devicePercentChart.resize;
			this.drawDevicePercentChart();

			this.activeDataChart = this.$echarts.init(this.$refs.activeData);
			window.onresize = this.activeDataChart.resize;
			this.drawActiveDataChart();

			this.departmentBodyDataChart = this.$echarts.init(this.$refs.departmentBodyData);
			window.onresize = this.departmentBodyDataChart.resize;
			this.drawDepartmentBodyDataChart1();
		},
		methods: {
			visitTrendTimesClick(item, index) {
				if(item.status)				//如果已经处于选中状态，不切换数据
					return;
				for (let i = 0; i < this.visitTrendTimesList.length; i++) {
					this.visitTrendTimesList[i].status = false;
				}
				item.status = true;
				if (index == 0) {
					this.visitTrendChart = this.$echarts.init(this.$refs.visitTrend);
					window.onresize = this.visitTrendChart.resize;
					this.drawVisitTrendChart1();
				} else if (index == 1) {
					this.visitTrendChart = this.$echarts.init(this.$refs.visitTrend);
					window.onresize = this.visitTrendChart.resize;
					this.drawVisitTrendChart2();
				} else if (index == 2) {
					this.visitTrendChart = this.$echarts.init(this.$refs.visitTrend);
					window.onresize = this.visitTrendChart.resize;
					this.drawVisitTrendChart3();
				}
			},
			departmentBodyDataClick(item, index) {
				if(item.status)				//如果已经处于选中状态，不切换数据
					return;
				for (let i = 0; i < this.departmentBodyDataList.length; i++) {
					this.departmentBodyDataList[i].status = false;
				}
				item.status = true;
				if (index == 0) {
					this.departmentBodyDataChart = this.$echarts.init(this.$refs.departmentBodyData);
					window.onresize = this.departmentBodyDataChart.resize;
					this.drawDepartmentBodyDataChart1();
				} else if (index == 1) {
					this.departmentBodyDataChart = this.$echarts.init(this.$refs.departmentBodyData);
					window.onresize = this.departmentBodyDataChart.resize;
					this.drawDepartmentBodyDataChart2();
				}
			},
			departmentRankDataClick(item, index) {
				if(item.status)				//如果已经处于选中状态，不切换数据
					return;
				for (let i = 0; i < this.departmentRankList.length; i++) {
					this.departmentRankList[i].status = false;
				}
				item.status = true;
			},
			// 本月新增用户波浪图表
			drawWaveChart() {
				this.waveChart.setOption({
					color: ["#1890FF"],
					grid: {
						left: 3,
						right: 3,
						top: 5,
						bottom: 0,
					},
					tooltip: {
						show: true,
						formatter: '{b}: {c}',
					},
					xAxis: {
						show: false,
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					yAxis: {
						show: false,
						type: 'value',
					},
					series: [{
						name: '日登录量',
						data: [112, 333, 422, 232, 145, 522, 225],
						type: 'line',
						showSymbol: true,
						areaStyle: {},
						symbol: 'circle',
						symbolSize: 3,
						smooth: true,
					}]
				});
			},
			// 本周访问量趋势图表
			drawVisitTrendChart1() {
				//随机数组
				let numViewWeek1 = new Array();
				let numViewWeek2 = new Array();
				let numViewWeek3 = new Array();
				let numViewWeek4 = new Array();
				let numViewWeek5 = new Array();
				let numViewWeek6 = new Array();

				let min = 100;
				let max = 300;
				let min2 = 400;
				let max2 = 800;
				let min3 = 300;
				let max3 = 600;
				for (let i = 0; i < 7; i++) {
					numViewWeek1[i] = Math.floor(min3 + Math.random() * (max3 - min3));
					numViewWeek2[i] = Math.floor(min2 + Math.random() * (max2 - min2));
					numViewWeek3[i] = Math.floor(min + Math.random() * (max - min));
					numViewWeek4[i] = Math.floor(min + Math.random() * (max - min));
					numViewWeek5[i] = Math.floor(min + Math.random() * (max - min));
					numViewWeek6[i] = Math.floor(min + Math.random() * (max - min));
				}
				this.visitTrendChart.setOption({
					tooltip: {
						trigger: 'axis',
						backgroundColor: '#ffffff',
						extraCssText: ' height:30px; box-shadow: 0 3 6px rgba(0, 0, 0, 0.12);',
						textStyle: {
							color: '#262626',
							fontSize: 14,
							fontFamily: 'PingFang SC',
							fontWeight: 'bold',
							lineHeight: 18
						}
					},
					color: ["#47A1FF", "#9860E5", "#F3657C", "#FAD34B", "#7BD58D", "#4ECBCC"],
					legend: {
						bottom: 0,
						data: ['云格智能座椅', '云格智能座椅二代(低配)', '智能蝴蝶椅', '站坐一号(智能桌)', 'i-tech(智能桌)', '德式班台(语音)'],
					},
					grid: {
						left: 20,
						right: 20,
						bottom: 20,
						top: 20,
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
						axisLine: {
							lineStyle: {
								color: '#D9D9D9',
							}
						},
						axisLabel: {
							fontSize: 12,
							fontFamily: 'PingFang SC',
							fontWeight: 400,
							color: "#262626",
							lineHeight: 18
						}
					},
					yAxis: {
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						type: 'value'
					},
					series: [{
						symbol: 'circle',
						symbolSize: 1,
						name: '云格智能座椅',
						type: 'line',
						data: numViewWeek1,
					}, {
						symbol: 'circle',
						symbolSize: 1,
						name: '云格智能座椅二代(低配)',
						type: 'line',
						data: numViewWeek2,
					}, {
						symbol: 'circle',
						symbolSize: 1,
						name: '智能蝴蝶椅',
						type: 'line',
						data: numViewWeek3,
					}, {
						symbol: 'circle',
						symbolSize: 1,
						name: '站坐一号(智能桌)',
						type: 'line',
						data: numViewWeek4,
					}, {
						symbol: 'circle',
						symbolSize: 1,
						name: 'i-tech(智能桌)',
						type: 'line',
						data: numViewWeek5,
					}, {
						symbol: 'circle',
						symbolSize: 1,
						name: '德式班台(语音)',
						type: 'line',
						data: numViewWeek6,
					}]
				});
			},
			// 本月访问量趋势图表
			drawVisitTrendChart2() {
				//随机数组
				let numViewMonth1 = new Array();
				let numViewMonth2 = new Array();
				let numViewMonth3 = new Array();
				let numViewMonth4 = new Array();
				let numViewMonth5 = new Array();
				let numViewMonth6 = new Array();
				//获取月份
				let curDate = new Date();
				let curMonth = curDate.getMonth() + 1;
				let n = curMonth;

				let wholeMonth1 = [n + '月1日', n + '月2日', n + '月3日', n + '月4日', n + '月5日', n + '月6日', n + '月7日', n + '月8日',
					n + '月9日', n + '月10日', n + '月11日', n + '月12日', n + '月13日', n + '月14日', n + '月15日',
					n + '月16日', n + '月17日', n + '月18日', n + '月19日', n + '月20日', n + '月21日', n + '月22日', n + '月23日', n +
					'月24日', n + '月25日', n + '月26日', n + '月27日', n + '月28日', n + '月29日', n + '月30日', n + '月31日',
				];
				let wholeMonth2 = [n + '月1日', n + '月2日', n + '月3日', n + '月4日', n + '月5日', n + '月6日', n + '月7日', n + '月8日',
					n + '月9日', n + '月10日', n + '月11日', n + '月12日', n + '月13日', n + '月14日', n + '月15日',
					n + '月16日', n + '月17日', n + '月18日', n + '月19日', n + '月20日', n + '月21日', n + '月22日', n + '月23日', n +
					'月24日', n + '月25日', n + '月26日', n + '月27日', n + '月28日', n + '月29日', n + '月30日',
				];
				let wholeMonth3 = ['月1日', '月2日', '月3日', '月4日', '月5日', '月6日', '月7日', '月8日', '月9日', '月10日', '月11日', '月12日',
					'月13日', '月14日', '月15日',
					'月16日', '月17日', '月18日', '月19日', '月20日', '月21日', '月22日', '月23日', '月24日', '月25日', '月26日', '月27日',
					'月28日',
				];

				let wholeMonth = new Array();
				//判断当前月份天数
				let numDay = 0;
				if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
					numDay = 31;
					wholeMonth = wholeMonth1;
				} else if (n == 2) {
					numDay = 28;
					wholeMonth = wholeMonth3;
				} else {
					numDay = 30;
					wholeMonth = wholeMonth2;
				}
				let min = 100;
				let max = 300;
				let min2 = 600;
				let max2 = 800;
				let min3 = 200;
				let max3 = 600;
				let max4 = 400;
				for (let i = 0; i < numDay; i++) {
					numViewMonth1[i] = Math.floor(min2 + Math.random() * (max2 - min2));
					numViewMonth2[i] = Math.floor(min2 + Math.random() * (max2 - min2));
					numViewMonth3[i] = Math.floor(min + Math.random() * (max - min));
					numViewMonth4[i] = Math.floor(min3 + Math.random() * (max3 - min3));
					numViewMonth5[i] = Math.floor(min3 + Math.random() * (max3 - min3));
					numViewMonth6[i] = Math.floor(min + Math.random() * (max - min));
				}
				this.visitTrendChart.setOption({
					tooltip: {
						trigger: 'axis',
						backgroundColor: '#ffffff',
						extraCssText: ' height:30px; box-shadow: 0 3 6px rgba(0, 0, 0, 0.12);',
						textStyle: {
							color: '#262626',
							fontSize: 14,
							fontFamily: 'PingFang SC',
							fontWeight: 'bold',
							lineHeight: 18,
						},
					},
					color: ["#47A1FF", "#9860E5", "#F3657C", "#FAD34B", "#7BD58D", "#4ECBCC"],
					legend: {
						bottom: 0,
						data: ['云格智能座椅', '云格智能座椅二代(低配)', '智能蝴蝶椅', '站坐一号(智能桌)', 'i-tech(智能桌)', '德式班台(语音)'],
					},
					grid: {
						left: 20,
						right: 20,
						bottom: 20,
						top: 20,
						containLabel: true,
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: wholeMonth,
						axisLine: {
							lineStyle: {
								color: '#D9D9D9',
							},
						},
						axisLabel: {
							fontSize: 10,
							fontFamily: 'PingFang SC',
							fontWeight: 400,
							color: "#262626",
							lineHeight: 18,
						},
					},
					yAxis: {
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						type: 'value',
					},
					series: [
						//每组一个月数据
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '云格智能座椅',
							type: 'line',
							data: numViewMonth1,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '云格智能座椅二代(低配)',
							type: 'line',
							data: numViewMonth2,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '智能蝴蝶椅',
							type: 'line',
							data: numViewMonth3,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '站坐一号(智能桌)',
							type: 'line',
							data: numViewMonth4,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: 'i-tech(智能桌)',
							type: 'line',
							data: numViewMonth5,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '德式班台(语音)',
							type: 'line',
							data: numViewMonth6,
						},
					]
				});
			},
			// 全年访问量趋势图表
			drawVisitTrendChart3() {
				let numViewYear1 = new Array();
				let numViewYear2 = new Array();
				let numViewYear3 = new Array();
				let numViewYear4 = new Array();
				let numViewYear5 = new Array();
				let numViewYear6 = new Array();

				let min = 3000;
				let max = 8000;
				let min2 = 12000;
				let max2 = 20000;

				for (let i = 0; i < 12; i++) {
					numViewYear1[i] = Math.floor(min2 + Math.random() * (max2 - min2));
					numViewYear2[i] = Math.floor(min2 + Math.random() * (max2 - min2));
					numViewYear3[i] = Math.floor(min + Math.random() * (max - min));
					numViewYear4[i] = Math.floor(min + Math.random() * (max - min));
					numViewYear5[i] = Math.floor(min + Math.random() * (max - min));
					numViewYear6[i] = Math.floor(min + Math.random() * (max - min));
				}
				//获取当前日期
				let curDate = new Date();
				let curYear = curDate.getFullYear();
				this.visitTrendChart.setOption({
					tooltip: {
						trigger: 'axis',
						backgroundColor: '#ffffff',
						extraCssText: ' height:30px; box-shadow: 0 3 6px rgba(0, 0, 0, 0.12);',
						textStyle: {
							color: '#262626',
							fontSize: 14,
							fontFamily: 'PingFang SC',
							fontWeight: 'bold',
							lineHeight: 18,
						},
					},
					color: ["#47A1FF", "#9860E5", "#F3657C", "#FAD34B", "#7BD58D", "#4ECBCC"],
					legend: {
						bottom: 0,
						data: ['云格智能座椅', '云格智能座椅二代(低配)', '智能蝴蝶椅', '站坐一号(智能桌)', 'i-tech(智能桌)', '德式班台(语音)'],
					},
					grid: {
						left: 20,
						right: 40,
						bottom: 20,
						top: 20,
						containLabel: true,
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: [curYear + '年1月', curYear + '年2月', curYear + '年3月', curYear + '年4月', curYear + '年5月',
							curYear + '年6月', curYear + '年7月', curYear + '年8月', curYear + '年9月', curYear +
							'年10月', curYear + '年11月', curYear + '年12月',
						],
						axisLine: {
							lineStyle: {
								color: '#D9D9D9',
							},
						},
						axisLabel: {
							fontSize: 10,
							fontFamily: 'PingFang SC',
							fontWeight: 400,
							color: "#262626",
							lineHeight: 18,
						},
					},
					yAxis: {
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						type: 'value',
					},
					series: [

						{
							symbol: 'circle',
							symbolSize: 1,
							name: '云格智能座椅',
							type: 'line',
							data: numViewYear1,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '云格智能座椅二代(低配)',
							type: 'line',
							data: numViewYear2,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '智能蝴蝶椅',
							type: 'line',
							data: numViewYear3,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '站坐一号(智能桌)',
							type: 'line',
							data: numViewYear4,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: 'i-tech(智能桌)',
							type: 'line',
							data: numViewYear5,
						},
						{
							symbol: 'circle',
							symbolSize: 1,
							name: '德式班台(语音)',
							type: 'line',
							data: numViewYear6,
						}
					]
				});
			},
			// 各设备占比图表
			drawDevicePercentChart() {
				let deviceArray = new Array();
				let min = 20;
				let max = 200;
				let numDeviceSum = 0;
				for (let i = 0; i < 6; i++) {
					deviceArray[i] = Math.floor(min + Math.random() * (max - min));
					numDeviceSum += deviceArray[i];
				}
				let devicePercentArray = [{
					value: deviceArray[0],
					name: '云格智能座椅'
				},
				{
					value: deviceArray[1],
					name: '云格智能座椅二代(低配)'
				},
				{
					value: deviceArray[2],
					name: '智能蝴蝶椅'
				},
				{
					value: deviceArray[3],
					name: '站坐一号(智能桌)'
				},
				{
					value: deviceArray[4],
					name: 'i-tech(智能桌)'
				},
				{
					value: deviceArray[5],
					name: '德式班台(语音)'
				}];
				this.devicePercentChart.setOption({
					tooltip: {
						trigger: 'item',
						backgroundColor: 'rgba(255, 255, 255, 0.85)',
						formatter: function(param) {
							return param.marker + " " + param.name + " " + param.value;
						},
						extraCssText: ' height:30px; box-shadow: 0 3 6px rgba(0, 0, 0, 0.12);',
						textStyle: {
							color: '#262626',
							fontSize: 12,
							fontFamily: 'PingFang SC',
							fontWeight: 400,
							lineHeight: 18,
						},
					},
					color: ["#47A1FF", "#9860E5", "#F3657C", "#FAD34B", "#7BD58D", "#4ECBCC"],
					legend: {
						formatter: function(name) {
							// 获取legend显示内容
							let data = devicePercentArray;
							let total = 0;
							let tarValue = 0;
							for (let i = 0, l = data.length; i < l; i++) {
								total += data[i].value;
								if (data[i].name == name) {
									tarValue = data[i].value;
								}
							}
							let p = (tarValue / total * 100).toFixed(0);
							let arr = [
								'{a|' + name + '}{b|' + p + '%}'
							];

							return arr.join('\n')
						},
						left: 280,
						top: 50,
						icon: 'circle',
						itemWidth: 8,
						itemHeight: 8,
						orient: 'vertical',
						data: ['云格智能座椅', '云格智能座椅二代(低配)', '智能蝴蝶椅', '站坐一号(智能桌)', 'i-tech(智能桌)', '德式班台(语音)'],
						textStyle: {
							rich: {
								a: {
									fontSize: 14,
									fontFamily: 'PingFang SC',
									fontWeight: 400,
									color: "#262626",
									lineHeight: 18,
									align: 'left',
									width: 200,
								},
								b: {
									fontSize: 14,
									fontFamily: 'DIN Condensed',
									fontWeight: 'bold',
									color: "#000000",
									lineHeight: 18,
									opacity: 0.85,
									align: 'left',
									width: 50,
								},
							},
						},
					},
					series: [{
						name: '设备占比',
						type: 'pie',
						radius: ['45%', '60%'],
						center: [130, 135],
						label: {
							show: false,
						},
						data: devicePercentArray
					}]
				});
			},
			// 活跃度数据图表
			drawActiveDataChart() {
				let activationArray = new Array();
				let min = 5000;
				let max = 50000;
				for (let i = 0; i < 6; i++) {
					activationArray[i] = Math.floor(min + Math.random() * (max - min));
				}
				this.activeDataChart.setOption({
					color: ['#7AB03A'],
					grid: {
						left: 200,
						right: 100,
						top: 20,
						bottom: 20,
					},
					xAxis: {
						type: 'value',
						show: false,
					},
					yAxis: {
						type: 'category',
						data: ["云格智能座椅", "云格智能座椅二代(低配)", "智能蝴蝶椅", "站坐一号(智能桌)", "i-tech(智能桌)", "德式班台(语音)"],
						axisLabel: {
							width: 25,
							show: true,
							interval: 0,
							textStyle: {
								fontSize: 14,
							},
							grid: {
								left: 35,
							},
						},
						axisLine: { //y轴线
							show: false,
						},
						axisTick: { //y轴刻度
							show: false,
						},
					},
					series: [{
						data: activationArray,
						type: 'bar',
						barWidth: 10,
						itemStyle: {
							normal: {
								label: { //数值标签
									show: true, //开启显示
									position: 'right', //显示位置在右侧
									textStyle: { //数值样式
										fontSize: 14,
										fontWeight: 'bold',
										fontFamily: 'DIN Condensed',
										color: "#262626",
										lineHeight: 18,
									}
								}
							}
						},
						// showBackground: true, //显示阴影
						backgroundStyle: { 		//阴影样式
							color: 'rgba(180,180,180,0.8)'
						}
					}]
				});
			},
			// 各部门平均心率图表
			drawDepartmentBodyDataChart1() {
				let heartRateArray = new Array();
				let min = 65;
				let max = 90;
				for (let i = 0; i < 7; i++) {
					heartRateArray[i] = Math.floor(min + Math.random() * (max - min));
				}
				this.departmentBodyDataChart.setOption({
					color: ['#1890FF'],
					xAxis: {
						type: 'category',
						data: ['财务部', '人事部', '销售部', '项目部', '总裁办', '总务处', '设计中心'],
						axisTick: {
							show: false,
						},
					},
					yAxis: {
						type: 'value',
						axisTick: {
							show: false,
						},
						axisLine: {
							show: false,
						},
					},
					series: [{
						data: heartRateArray,
						type: 'bar',
						barWidth: 30
					}]
				});
			},
			// 各部门疲劳度图表
			drawDepartmentBodyDataChart2() {
				let fatigueArray = new Array();
				let min = 0;
				let max = 90;
				for (let i = 0; i < 7; i++) {
					fatigueArray[i] = Math.floor(min + Math.random() * (max - min));
				}
				this.departmentBodyDataChart.setOption({
					color: ['#1890FF'],
					xAxis: {
						type: 'category',
						data: ['财务部', '人事部', '销售部', '项目部', '总裁办', '总务处', '设计中心'],
						axisTick: {
							show: false,
						},
					},
					yAxis: {
						type: 'value',
						axisTick: {
							show: false,
						},
						axisLine: {
							show: false,
						},
					},
					series: [{
						data: fatigueArray,
						type: 'bar',
						barWidth: 30
					}]
				});
			},
		}
	}
</script>

<style lang="scss">
	.first_page_container {
		padding: 16px 0 16px 24px;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		.one_row_box {
			display: flex;
			align-items: center;
		
			.one_row_box_gap {
				width: 384px;
				height: 1px;
				background-color: #F0F0F0;
			}
		
			.device_box {
				width: 384px;
				height: 204px;
				background: #FFFFFF;
				border-radius: 2px;
				text-align: left;
				box-sizing: border-box;
		
				.device_box_title {
					height: 49px;
					box-sizing: border-box;
					padding-left: 24px;
					font-size: 16px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #262626;
					line-height: 49px;
				}
		
				.device_box_content {
					width: 384px;
					height: 105px;
					padding: 22px 0 0 24px;
					box-sizing: border-box;
		
					.device_box_sum_num_content {
						display: flex;
						align-items: flex-end;
		
						.device_box_sum_num {
							font-size: 30px;
							font-weight: bold;
							color: #262626;
						}
		
						.device_box_sum_num_word {
							margin: 0 0 6px 10px;
							font-size: 14px;
							font-family: PingFang SC;
							font-weight: 400;
							color: #262626;
						}
					}
		
					.device_box_change_percent {
						display: flex;
						align-items: center;
						margin-top: 8px;
		
						.device_box_percent_word {
							font-size: 14px;
							font-family: PingFang SC;
							font-weight: 400;
							color: #595959;
						}
		
						/* 向上箭头 */
						.up_red_arrow {
							margin: 7px 12px 6px 4px;
							width: 0;
							height: 0;
							border-bottom: 5px solid #FF4D4F;
							border-left: 5px solid transparent;
							border-right: 5px solid transparent;
						}
		
						/* 向下箭头 */
						.down_green_arrow {
							margin: 7px 0 6px 4px;
							width: 0;
							height: 0;
							border-top: 5px solid #8BBB11;
							border-left: 5px solid transparent;
							border-right: 5px solid transparent;
						}
					}
				}
		
				.device_box_bottom {
					display: flex;
					align-items: center;
					width: 384px;
					height: 48px;
					padding: 0px 24px;
					box-sizing: border-box;
		
					.device_box_bottom_left {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 190px;
						height: 55px;
					}
		
					.device_box_straight_line {
						width: 1px;
						height: 20px;
						margin: 0 40px;
						background-color: #F0F0F0;
					}
		
					.device_box_bottom_right {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 190px;
						height: 55px;
					}
		
					.device_box_bottom_word {
						margin-right: 4px;
						font-weight: 700;
					}
				}
			}
		
			.new_users_box {
				width: 384px;
				height: 204px;
				background: #FFFFFF;
				border-radius: 2px;
				margin-left: 16px;
				text-align: left;
				box-sizing: border-box;
		
				.new_users_box_title {
					height: 49px;
					box-sizing: border-box;
					padding-left: 24px;
					font-size: 16px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #262626;
					line-height: 49px;
				}
		
				.new_users_box_content {
					width: 384px;
					height: 105px;
					padding: 22px 0 0 24px;
					box-sizing: border-box;
		
					.new_users_box_sum_nums_content {
						display: flex;
						align-items: flex-end;
		
						.new_users_box_sum_num {
							font-size: 30px;
							font-weight: bold;
							color: #262626;
						}
		
						.new_users_box_sum_num_word {
							margin: 0 0 6px 10px;
							font-size: 14px;
							font-family: PingFang SC;
							font-weight: 400;
							color: #262626;
						}
					}
				}
		
				.new_users_box_bottom {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 384px;
					height: 48px;
					padding: 0px 24px;
					box-sizing: border-box;
		
					.new_users_box_bottom_word {
						margin-right: 4px;
						font-weight: 700;
					}
				}
			}
		
			.weekend_login_users_box {
				width: 384px;
				height: 204px;
				background: #FFFFFF;
				border-radius: 2px;
				margin-left: 16px;
				text-align: left;
				box-sizing: border-box;
		
				.weekend_login_users_box_title {
					height: 49px;
					box-sizing: border-box;
					padding-left: 24px;
					font-size: 16px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #262626;
					line-height: 49px;
				}
		
				.weekend_login_users_box_content {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					width: 384px;
					height: 105px;
					padding: 22px 24px 15px 24px;
					box-sizing: border-box;
		
					span {
						font-size: 30px;
						font-weight: bold;
						color: #262626;
					}
		
					.weekend_login_users_box_echarts {
						width: 100%;
						height: 48px;
					}
				}
		
				.weekend_login_users_box_bottom {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 384px;
					height: 48px;
					padding: 0px 24px;
					box-sizing: border-box;
		
					.weekend_login_users_box_bottom_word {
						margin-right: 4px;
						font-weight: 700;
					}
				}
			}
		}
		
		.two_row_box {
			width: 1184px;
			height: 400px;
			border-radius: 2px;
			background: #FFFFFF;
			margin-top: 16px;
		
			.visit_trend_title_box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 50px;
				padding: 0 32px 0 24px;
				font-size: 16px;
				font-family: PingFang SC;
				font-weight: 400;
				color: #262626;
				box-sizing: border-box;
		
				.visit_trend_title_right_box {
					display: flex;
					align-items: center;
		
					.visit_trend_title_right_box_word {
						cursor: pointer;
						margin-right: 40px;
						white-space: nowrap;
					}
		
					.visit_trend_title_right_box_word_sel {
						cursor: pointer;
						margin-right: 40px;
						white-space: nowrap;
						color: #7AB03A;
						font-weight: bold;
					}
		
					.visit_trend_data_box {
						display: flex;
						align-items: center;
						height: 32px;
						width: 260px;
						border: solid 1px #D9D9D9;
						font-size: 10px;
		
						.visit_trend_data_img {
							width: 20px;
							height: 20px;
						}
						
						img {
							width: 35px;
							height: 35px;
						}
					}
				}
			}
		
			.visit_trend_gap {
				width: 1184px;
				height: 1px;
				background-color: #F0F0F0;
			}
		
			.visit_trend_echart_box {
				height: 349px;
			}
		}
		
		.three_row_box {
			display: flex;
			align-items: center;
			margin-top: 16px;
		
			.device_percent_box {
				width: 584px;
				height: 328px;
				border-radius: 2px;
				background-color: #FFFFFF;
		
				.device_percent_title_box {
					height: 47px;
					padding-left: 24px;
					font-size: 16px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #262626;
					text-align: left;
					line-height: 47px;
					box-sizing: border-box;
				}
		
				.device_percent_echart_box {
					height: 280px;
				}
			}
		
			.active_data_box {
				width: 584px;
				height: 328px;
				margin-left: 16px;
				border-radius: 2px;
				background-color: #FFFFFF;
		
				.active_data_title_box {
					height: 47px;
					padding-left: 24px;
					font-size: 16px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #262626;
					text-align: left;
					line-height: 47px;
					box-sizing: border-box;
				}
		
				.active_data_echart_box {
					height: 280px;
				}
			}
		
			.three_row_box_gap {
				width: 584px;
				height: 1px;
				background-color: #F0F0F0;
			}
		}
		
		.four_row_box {
			display: flex;
			align-items: center;
			margin: 16px 0;
		
			.department_bar_box {
				width: 734px;
				height: 364px;
				border-radius: 2px;
				background-color: #FFFFFF;
		
				.department_bar_title_box {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 47px;
					padding: 0 24px;
					box-sizing: border-box;
		
					.department_bar_title_left {
						display: flex;
						align-items: center;
						.department_bar_title_left_row {
							.department_bar_title {
								cursor: pointer;
								height: 47px;
								font-size: 16px;
								font-family: PingFang SC;
								font-weight: 400;
								color: #262626;
								margin-right: 60px;
							}
									
							.department_bar_title_sel {
								cursor: pointer;
								height: 47px;
								font-size: 16px;
								font-family: PingFang SC;
								font-weight: 400;
								color: #7AB03A;
								border-bottom: #7AB03A solid 2px;
								margin-right: 60px;
							}
						}
					}
		
					.department_bar_title_right {
						font-size: 12px;
						color: #8C8C8C;
					}
				}
		
				.department_bar_box_gap {
					width: 100%;
					height: 1px;
					background-color: #F0F0F0;
				}
		
				.department_bar_echart_box {
					height: 280px;
				}
			}
		
			.department_rank_box {
				width: 434px;
				height: 364px;
				margin-left: 16px;
				border-radius: 2px;
				background-color: #FFFFFF;
		
				.department_rank_title_box {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 47px;
					padding-left: 24px;
					box-sizing: border-box;
					
					.department_rank_title_left {
						font-size: 16px;
						font-family: PingFang SC;
						font-weight: 400;
						color: #262626;
					}
					
					.department_rank_title_right {
						display: flex;
						align-items: center;
						font-size: 14px;
						font-family: PingFang SC;
						font-weight: 400;
						margin-right: 25px;
						.department_rank_title_right_content {
							cursor: pointer;
							height: 32px;
							width: 86px;
							color: #262626;
							line-height: 32px;
						}
						.department_rank_title_right_content_sel {
							cursor: pointer;
							height: 32px;
							width: 86px;
							line-height: 32px;
							color: #79CB35;
							border: #79CB35 solid 1px;
						}
					}
				}
		
				.department_rank_box_gap {
					width: 100%;
					height: 1px;
					background-color: #F0F0F0;
				}
		
				.department_rank_bottom_content {
					height: 316px;
					padding: 36px 60px;
					box-sizing: border-box;
					.department_rank_bottom_content_col {
						display: flex;
						flex-direction: column;
						align-items: center;
						.department_rank_bottom_content_row {
							display: flex;
							align-items: center;
							justify-content: space-between;
							width: 100%;
							margin-bottom: 18px;
							.department_rank_bottom_content_row_left {
								display: flex;
								align-items: center;
								font-size: 14px;
								.department_rank_bottom_content_index {
									width: 18px;
									height: 18px;
									border-radius: 18px;
									color: #262626;
									line-height: 18px;
									background-color: #F0F0F0;
								}
								.department_rank_bottom_content_index_sel {
									width: 18px;
									height: 18px;
									border-radius: 18px;
									color: #FFFFFF;
									line-height: 18px;
									background-color: #7AB03A;
								}
								.department_rank_bottom_content_title {
									margin-left: 24px;
									font-size: 16px;
									color: #262626;
								}
								.department_rank_bottom_content_title_sel {
									margin-left: 24px;
									font-size: 16px;
									color: #262626;
									font-weight: bold;
								}
							}
							.department_rank_bottom_content_row_right {
								font-size: 16px;
								color: #262626;
								font-weight: bold;
								span {
									font-size: 12px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
