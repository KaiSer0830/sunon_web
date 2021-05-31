import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'

import '@/assets/css/table.scss'
import '@/assets/js/verify.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
