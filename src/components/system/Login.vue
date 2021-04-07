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
					<input placeholder="请输入账户名" class="login_box_input">
					<input placeholder="请输入账户密码" class="login_box_input">
					<button @click="naviToMainMenu()">登录</button>
					<div class="checkcode_box">
						<input placeholder="请输入验证码" class="checkcode_input"/>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				functionList: ['智能椅管理', '智能桌管理', '桌椅联动管理', '用户管理', '数据统计分析']
			}
		},
		methods: {
			naviToMainMenu() {
				this.$router.push('home');
			}
		}
	}
</script>

<style scoped>
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
		box-sizing: border-box;			/* 设置padding时不会撑大父级 */
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
	.infoList_box .function_list_row img{
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
		box-sizing: border-box;			/* 设置padding时不会撑大父级 */
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
	.login_box_input {
		width: 300px;
		height: 28px;
		margin-top: 16px;
		border: 1px solid #4E555B;
		background-color: rgb(232, 240, 254);
	}
	.checkcode_input {
		width: 100px;
		height: 28px;
		margin-top: 16px;
		border: 1px solid #4E555B;
	}
	input:focus {
		border: 1px solid #afdfe4;
	}
	button {
		width: 305px;
		height: 34px;
		margin-top: 14px;
		color: #FFFFFF;
		font-size: 16px;
		border: none;
		border-radius: 2px;
		background-color: rgba(0, 151, 248, 0.8);
	}
	button:hover {
		background-color: rgb(0, 151, 248, 1);
		cursor: pointer;
	}
	.checkcode_box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 300px;
	}
</style>
