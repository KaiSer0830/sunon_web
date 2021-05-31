<template>
	<div>
		<div class="bg"></div>
		<div class="content_box">
			<div class="infoList_box">
				<div class="infoList_title">圣奥</div>
				<div class="infoList_subtitle">欢迎使用 智能办公后台管理系统</div>
				<div class="function_list_box">
					<div v-for="(item, index) in functionList" class="function_list_row">
						<img src="../../assets/system/arrow_right.png" />
						<div class="function_list_row_name">{{item}}</div>
					</div>
				</div>
			</div>
			<div class="login_box">
				<div class="login_content">
					<div class="login_box_title">用户登录</div>
					<div class="login_box_subtitle">欢迎登录智能办公后台管理系统</div>
					<input placeholder="请输入账户名" type="text" class="login_box_account_input" v-model="userAccount">
					<input placeholder="请输入账户密码" type="password" class="login_box_password_input" v-model="userPassword">
					<button @click="naviToMainMenu()">登录</button>
					<div class="checkcode_box">
						<input placeholder="请输入验证码" maxlength="4" class="checkcode_input" v-model="verifyCode"/>
						<div class="verify_box" id="verify_code"></div>
					</div>
				</div>
			</div>
			<Popup :content="verifyFailInfo" :popupFlag="popupFlag" :displayTime="1000"></Popup>
		</div>
	</div>
</template>

<script>
	import Popup from './tools/Popup.vue'
	export default {
		name: 'Login',
		components: {
			Popup
		},
		data() {
			return {
				userAccount: 'admin',
				userPassword: '123456',
				functionList: ['智能椅管理', '智能桌管理', '桌椅联动管理', '用户管理', '数据统计分析'],
				verifyObj: null,		//弹窗对象
				verifyCode: '',			//验证码
				verifyFailInfo: '验证码错误',		//弹窗内容
				verifyStatus: false,				//验证码验证结果
				popupFlag: false					//弹窗标志位，状态发生改变时会弹窗
			}
		},
		mounted() {
			this.verifyObj = new GVerify({
				id: "verify_code",
				type: "blend"
			});
		},
		methods: {
			naviToMainMenu() {
				let res = this.verifyObj.validate(this.verifyCode);
				if (res) {
					if(this.userAccount == 'admin' && this.userPassword == '123456') {
						this.verifyStatus = true;
						this.$router.push('home');
					}else {
						this.verifyFailInfo = '用户名或密码错误';
						this.popupFlag = ! this.popupFlag;
					}
				} else {
					this.verifyStatus = false;
					this.popupFlag = ! this.popupFlag;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		background: url(../../assets/system/background.jpg) no-repeat;
		background-size: cover;
		position: absolute;
		width: 100%;
		height: 100%;
		filter: blur(4px);
	}

	.content_box {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.infoList_box {
		position: absolute;
		top: 50%;
		margin-top: -175px;
		margin-right: 500px;
		width: 550px;
		height: 340px;
		padding: 30px 15px;
		box-sizing: border-box;
		/* 设置padding时不会撑大父级 */
		text-align: left;
		color: #FFFFFF;
	}

	.infoList_box .infoList_title {
		font-size: 36px;
	}

	.infoList_box .infoList_subtitle {
		font-size: 28px;
		font-weight: 600;
		margin-top: 14px;
	}

	.infoList_box .function_list_box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 12px;
	}

	.infoList_box .function_list_row {
		display: flex;
		align-items: center;
		margin-top: 6px;
	}

	.function_list_row_name {
		font-size: 20px;
		margin-left: 10px;
	}

	.infoList_box .function_list_row img {
		width: 30px;
		height: 30px;
	}

	.login_box {
		position: absolute;
		top: 50%;
		margin-top: -175px;
		margin-left: 600px;
		width: 350px;
		height: 340px;
		padding: 30px 15px;
		box-sizing: border-box;
		/* 设置padding时不会撑大父级 */
		border-radius: 4px;
		background-color: #FFFFFF;
	}

	.login_content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.login_box_title {
		color: #2E2E2E;
		font-size: 28px;
	}

	.login_box_subtitle {
		color: #6E6B5E;
		font-size: 14px;
		margin-top: 16px;
	}

	.login_box_account_input {
		width: 300px;
		height: 36px;
		margin-top: 16px;
		padding: 0 10px;
		border: 1px solid #4E555B;
		background-color: rgb(232, 240, 254);
		background: url(../../assets/system/table/account.png) no-repeat;
		background-size: 8%;
		background-position: 270px;
	}

	.login_box_password_input {
		width: 300px;
		height: 36px;
		margin-top: 16px;
		padding: 0 10px;
		border: 1px solid #4E555B;
		background-color: rgb(232, 240, 254);
		background: url(../../assets/system/table/lock.png) no-repeat;
		background-size: 8%;
		background-position: 270px;
	}

	input:focus {
		outline: none;
		border: 1px solid #7AB03A;
	}

	button {
		width: 305px;
		height: 36px;
		margin-top: 14px;
		color: #FFFFFF;
		font-size: 16px;
		border: none;
		border-radius: 2px;
		background-color: rgba(0, 151, 248, 0.8);
	}

	button:hover {
		background-color: rgb(0, 151, 248);
		cursor: pointer;
	}

	.checkcode_box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 300px;
		margin-top: 16px;
		
		.checkcode_input {
			width: 120px;
			height: 36px;
			border: 1px solid #4E555B;
		}
		
		.verify_box {
			width: 120px;
			height: 36px;
		}
	}
</style>
