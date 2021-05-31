<template>
	<div v-show="displayStatus">
		<!--这里是要展示的内容层-->
		<div class="content_style">
			{{content}}
		</div>
		<!--这里是半透明背景层-->
		<div class="content_over"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				displayStatus: false
			};
		},
		props: {
			popupFlag: {		//是否显示的标志位
				type: Boolean,
				default: false
			},
			content: {			//弹窗显示的内容
				type: String,
				default: ''
			},
			displayTime: {		//弹窗显示的时间
				type: Number,
				default: 1000
			}
		},
		watch: {
			popupFlag(newV, oldV) {				
				this.displayStatus = true;
				setTimeout(() => {
					this.displayStatus = false;
				}, this.displayTime);
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	};
</script>

<style>
	.content_style {
		position: fixed;
		font-size: 20px;
		height: 50px;
		width: 240px;
		line-height: 50px;
		color: #FFFFFF;
		background-color: #5E6060;
		border-radius: 0.25rem;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1000;
	}

	.content_over {
		position: fixed;
		width: 100%;
		height: 100%;
		opacity: 0.7; 
		filter: alpha(opacity=70);
		top: 0;
		left: 0;
		z-index: 999;
		/* background-color: #111111; */
	}
</style>
