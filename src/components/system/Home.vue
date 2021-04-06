<template>
	<div class="container">
		<div class="left_box">
			<img src="../../assets/system/sunon.png" />
			<div class="menu_box">
				<div v-for="(item, index) in menuList" class="menu_content">
					<div :class="item.status ? 'menu_row_selected' : 'menu_row'"  @click="menuClick(item)">
						<div class="menu_row_left">
							<img :src="item.status ? item.icon_s : item.icon" class="menu_img" />
							<div class="menu_title">{{item.title}}</div>
						</div>
						<div>
							<img v-if="item.status" src="../../assets/system/down_arrow.png"  class="menu_img"/>
							<img v-else src="../../assets/system/right_arrow.png"  class="menu_img"/>
						</div>
					</div>
					<div v-if="item.status && item.subList.length != 0" v-for="(subItem, subIndex) in item.subList" class="submenu_box">
						<div class="submenu_row" @click="activeMenuAdd(item, subItem)">{{subItem.title}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="right_box">
			<div class="right_box_head">
				<div class="head_company_name">{{companyName}}</div>
				<img src="../../assets/system/notify.png" />
				<div class="userinfo_dropdown_box">
					<div class="head_userinfo_box">
						<div class="head_userinfo_img">
							<img src="../../assets/system/icons/head_image.png" />
						</div>
						<div class="head_userinfo_name">{{userName}}</div>
					</div>
					<div class="userinfo_dropdown_content">
						<div v-for="(item, index) in userSetList" class="userinfo_dropdown_row">
							<img :src="item.imgUrl" />
							<div>{{item.title}}</div>
						</div>
						<div class="gray_gap"></div>
						<div class="userinfo_dropdown_row">
							<img src="../../assets/system/person/unlogin.png" />
							<div>退出登录</div>
						</div>
					</div>
				</div>
				<div class="head_language">EN</div>
			</div>
			<div class="right_box_title">
				<div class="title_left_box">
					<img src="../../assets/system/left_double_arrow.png" />
					<div class="menu_active_box">
						<div v-for="(item, index) in activeSubMenuList" class="menu_active_row" @click="subMenuClick(item)">
							<img v-if="item.status" :src="item.icon_a" />
							<img v-else :src="item.icon" />
							<div :class="item.status ? 'menu_active_row_word_a':'menu_active_row_word'">{{item.title}}</div>
							<img v-if="item.title != '首页展示'" src="../../assets/system/move.png" @click="activeMenuMove(index)"/>
						</div>
					</div>
				</div>
				<img src="../../assets/system/right_double_arrow.png" />
			</div>
			<div class="right_box_content">
				<component :is="activeComponentName"></component>
			</div>
		</div>
	</div>
</template>

<script>
	import FirstPage from './menus/FirstPage.vue'
	import CompanyList from './menus/CompanyList.vue'
	export default {
		name: 'userLogin',
		components: {
			FirstPage,
			CompanyList
		},
		data() {
			return {
				companyName: '浙江圣奥家具制造有限公司',
				userName: 'Aresn',
				menuList: [{
					title: '主页',
					icon: require('../../assets/system/icons/home.png'),
					icon_s: require('../../assets/system/icons/home_s.png'),
					icon_a: require('../../assets/system/icons/home_a.png'),
					status: false,
					subList: [{
						title: '首页展示',
						componentName: 'FirstPage'
					}]
				},{
					title: '公司管理',
					icon: require('../../assets/system/icons/company.png'),
					icon_s: require('../../assets/system/icons/company_s.png'),
					icon_a: require('../../assets/system/icons/company_a.png'),
					status: false,
					subList: [{
						title: '公司列表',
						componentName: 'CompanyList'
					}]
				},{
					title: '设备管理',
					icon: require('../../assets/system/icons/device.png'),
					icon_s: require('../../assets/system/icons/device_s.png'),
					icon_a: require('../../assets/system/icons/device_a.png'),
					status: false,
					subList: [{
						title: '设备绑定数据管理',
						componentName: 'CompanyList'
					}]
				},{
					title: 'App用户管理',
					icon: require('../../assets/system/icons/user.png'),
					icon_s: require('../../assets/system/icons/user_s.png'),
					icon_a: require('../../assets/system/icons/user_a.png'),
					status: false,
					subList: [{
						title: 'App注册数据数据',
						componentName: 'CompanyList'
					}, {
						title: 'App用户详细数据',
						componentName: 'CompanyList'
					}, {
						title: 'App注册用户统计数据',
						componentName: 'CompanyList'
					}]
				},{
					title: '体征数据',
					icon: require('../../assets/system/icons/bodysign.png'),
					icon_s: require('../../assets/system/icons/bodysign_s.png'),
					icon_a: require('../../assets/system/icons/bodysign_a.png'),
					status: false,
					subList: [{
						title: 'App座椅体征数据统计',
						componentName: 'CompanyList'
					}, {
						title: 'App升降桌体征数据统计',
						componentName: 'CompanyList'
					}, {
						title: 'App座椅实时体征数据',
						componentName: 'CompanyList'
					}, {
						title: 'App座椅历史体征数据',
						componentName: 'CompanyList'
					}]
				},{
					title: '视频管理',
					icon: require('../../assets/system/icons/video.png'),
					icon_s: require('../../assets/system/icons/video_s.png'),
					icon_a: require('../../assets/system/icons/video_a.png'),
					status: false,
					subList: [{
						title: '视频文件管理',
						componentName: 'CompanyList'
					}, {
						title: '视频类型管理',
						componentName: 'CompanyList'
					}, {
						title: 'App视频参与记录管理',
						componentName: 'CompanyList'
					}, {
						title: 'App视频历史记录',
						componentName: 'CompanyList'
					}]
				},{
					title: '系统管理',
					icon: require('../../assets/system/icons/manager.png'),
					icon_s: require('../../assets/system/icons/manager_s.png'),
					icon_a: require('../../assets/system/icons/manager_a.png'),
					status: false,
					subList: [{
						title: '用户管理',
						componentName: 'CompanyList'
					}, {
						title: '角色管理',
						componentName: 'CompanyList'
					}, {
						title: '系统菜单',
						componentName: 'CompanyList'
					}]
				},{
					title: '系统工具',
					icon: require('../../assets/system/icons/tool.png'),
					icon_s: require('../../assets/system/icons/tool_s.png'),
					icon_a: require('../../assets/system/icons/tool_a.png'),
					status: false,
					subList: [{
						title: '代码生成',
						componentName: 'CompanyList'
					}]
				}],
				userSetList: [{
					title: '个人中心',
					imgUrl: require('../../assets/system/person/person.png')
				}, {
					title: '个人设置',
					imgUrl: require('../../assets/system/person/setting.png')
				}],
				activeSubMenuList: [{
					title: '首页展示',
					icon: require('../../assets/system/icons/home.png'),
					icon_a: require('../../assets/system/icons/home_a.png'),
					componentName: 'FirstPage',
					status: true
				}],
				activeComponentName: 'FirstPage'
			}
		},
		methods: {
			menuClick(item) {
				this.menuList.forEach(obj => {		//左侧菜单点击显示栏
					if(obj.title != item.title) {
						obj.status = false
					}
				})
				item.status = !item.status;
			},
			subMenuClick(item) {		//右侧子菜单点击显示栏
				this.activeSubMenuList.forEach(obj => {
					if(obj.title != item.title) {
						obj.status = false
					}
				});
				item.status = true;
				this.activeComponentName = item.componentName;
			},
			activeMenuAdd(item, subItem) {
				for(let i = 0; i < this.activeSubMenuList.length; i++) {
					if(this.activeSubMenuList[i].title == subItem.title) {
						for(let j = 0; j < this.activeSubMenuList.length; j++) {
							if(this.activeSubMenuList[j].title != subItem.title) {
								this.activeSubMenuList[j].status = false;
							}
						}
						this.activeSubMenuList[i].status = true;
						this.activeComponentName = subItem.componentName;
						return;
					}
					this.activeSubMenuList[i].status = false;
				}
				let tempSubMenu = {};
				tempSubMenu.icon = item.icon;
				tempSubMenu.icon_a = item.icon_a;
				tempSubMenu.title = subItem.title;
				tempSubMenu.componentName = subItem.componentName;
				this.activeComponentName = subItem.componentName;
				tempSubMenu.status = true;
				this.activeSubMenuList.push(tempSubMenu);
			},
			activeMenuMove(index) {
				// 阻止冒泡：点击子级时，不触发父级元素的点击事件
				var e = this.getEvent();
				if (window.event) {
					e.cancelBubble = true;
				}else if(e.preventDefault){
					e.stopPropagation();		//阻止冒泡
				}  
				if(this.activeSubMenuList[index].status) {
					if(index == this.activeSubMenuList.length - 1) {		//删除的是数组最后一个元素
						if(this.activeSubMenuList.length > 1) {			//如果不止一个元素，则将选中状态给前一个元素，如果只有一个元素则不操作
							this.activeSubMenuList[index - 1].status = true;
						}		
					}else {						//删除的是数组中间的一个元素
						this.activeSubMenuList[index + 1].status = true;			//将选中状态给后一个元素
					}
				}
				this.activeSubMenuList.splice(index, 1);
			},
			getEvent(){			//获取event(兼容火狐)
				if(window.event){return window.event;}
				var func = getEvent.caller;
				while(func != null){
					var arg0 = func.arguments[0];
					if(arg0){
						if((arg0.constructor == Event || arg0.constructor == MouseEvent
								|| arg0.constructor == KeyboardEvent)
							|| (typeof(arg0) == "object" && arg0.preventDefault
								&& arg0.stopPropagation)){
							return arg0;
						}
					}
					func = func.caller;
				}
				return null;
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		padding: 0;
		background-color: #0000FF;
		.left_box {
			flex: 1;
			min-width: 210px;
			background-color: #191A23;
			img {
				width: 109px;
				height: 30px;
				margin: 17px 0;
			}
			.menu_box {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				.menu_content {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					cursor: pointer;
					.menu_row {
						display: flex;
						align-items: center;
						justify-content: space-between;
						box-sizing: border-box;
						padding-left: 17px;
						padding-right: 17px;
						color: #8C8C8C;
						font-size: 14px;
						width: 100%;
						height: 48px;
					}
					.menu_row:hover {
						color: #FEFEFE;
						background-color: rgb(41,56,70);
					}
					.menu_row_selected {
						display: flex;
						align-items: center;
						justify-content: space-between;
						box-sizing: border-box;
						padding: 0px 17px;
						color: #FEFEFE;
						font-size: 14px;
						width: 100%;
						height: 48px;
						background-color: #7AB03A;
					}
					.menu_img {
						width: 16px;
						height: 16px;
					}
					.menu_title {
						margin-left: 14px;
					}
					.menu_row_left {
						display: flex;
						align-items: center;
					}
					.submenu_box {
						width: 100%;
						width: 100%;
						text-align: left;
						box-sizing: border-box;
						padding-left: 50px;
						.submenu_row {
							width: 100%;
							height: 48px;
							// background-color: deeppink;
							color: #8C8C8C;
							font-size: 14px;
							line-height: 48px;
						}
						.submenu_row:hover {
							color: #FEFEFE;
						}
					}
				}
			}
		}
		.right_box {
			display: flex;
			flex-direction: column;
			flex: 6;
			min-width: 750px;
			height: 100%;
			background-color: #FAFAFA;
			.right_box_head {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				height: 48px;
				background-color: #E28964;
				.head_company_name {
					font-size: 16px;
					color: #262626;
					font-weight: 600;
					margin-right: 115px;
					cursor: pointer;
				}
				img {
					width: 20px;
					height: 20px;
					margin-right: 18px;
					cursor: pointer;
				}
				.userinfo_dropdown_box {
					position: relative;
					display: inline-block;
					height: 100%;
					cursor: pointer;
					.head_userinfo_box {
						display: flex;
						align-items: center;
						height: 100%;
						width: 104px;
						padding: 0 16px;
						margin-right: 23px;
						box-sizing: border-box;
						.head_userinfo_img {
							width: 24px;
							height: 24px;
							border-radius: 12px;
							margin-right: 11px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.head_userinfo_name {
							color: #3E3E3E;
							font-size: 14px;
						}
					}
					.userinfo_dropdown_content {
						display: none;
						position: absolute;
						left: -58px;
						padding: 12px 0;
						min-width: 162px;
						height: 114px;
						box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
						border-radius: 2px;
						z-index: 998;
						.userinfo_dropdown_row {
							display: flex;
							align-items: center;
							padding-left: 10px;
							height: 28px;
							font-size: 14px;
							color: #262626;
							img {
								width: 12px;
								height: 12px;
								margin-right: 8px;
							}
						}
						.gray_gap {
							height: 1px;
							width: 100%;
							margin: 10px 0 10px 0;
							background-color: #F0F0F0;
						}
						.userinfo_dropdown_row:hover {
							background-color: #F0F0F0;
						}
					}
				}
				.userinfo_dropdown_box:hover .head_userinfo_box{
					background-color: #FFFFFF;
					cursor: pointer;
				}
				.userinfo_dropdown_box:hover .userinfo_dropdown_content{
					display: block;
					cursor: pointer;
				}
				.userinfo_dropdown_content:hover {
					display: block;
					cursor: pointer;
				}
				.head_language {
					font-size: 14px;
					color: #595959;
					margin-right: 31px;
					cursor: pointer;
				}
			}
			.right_box_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #F0F0F0;
				height: 48px;
				.title_left_box {
					display: flex;
					align-items: center;
					height: 100%;
					overflow: hidden;
					cursor: pointer;
					img {
						width: 30px;
						height: 30px;
						margin: 0 10px;
					}
					.menu_active_box {
						display: flex;
						align-items: center;
						height: 100%;
						font-size: 16px;
						font-weight: 700;
						box-sizing: border-box;
						white-space: nowrap;
						overflow-x: auto;
						.menu_active_row {
							display: flex;
							align-items: center;
							height: 100%;
							padding: 0 15px;
							box-sizing: border-box;
							border-radius: 15px 15px 0 0;
							background-color: #FFFFFF;
							margin-right: 5px;
							.menu_active_row_word {
								margin: 0 13px;
								color: #8C8C8C;
							}
							.menu_active_row_word:hover {
								color: #2c3e50;
							}
							.menu_active_row_word_a {
								margin: 0 13px;
								color: #7AB13A;
							}
							img {
								width: 20px;
								height: 20px;
							}
						}
						.menu_active_row:hover {
							color: rgba(122, 177, 58, 0.5);
						}
					}
				}
				img {
					width: 30px;
					height: 30px;
					margin: 0 10px;
					cursor: pointer;
				}
			}
			.right_box_content {
				display: flex;
				align-items: flex-start;
				background-color: #FAFAFA;
				height: 100%;
				overflow-y: auto;
			}
		}
	}
	
</style>
