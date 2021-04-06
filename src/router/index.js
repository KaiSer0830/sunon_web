import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/system/Login.vue'
import Home from '../components/system/Home.vue'
import FirstPage from '../components/system/menus/FirstPage.vue'

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象，配置路由和组件之间的映射关系
const routes = [{
		path: '/',
		component: Login
	},{
		path: '/home',
		component: Home
	},{
		path: '/firstpage',
		component: FirstPage
	}
]
const router = new VueRouter({
	//配置路由和组件之间的应用关系
	routes,
	mode: 'history'			//将哈希模式（默认)改成history模式，去除网页路径中的#
})

// 3.将router对象传入到Vue实例
export default router