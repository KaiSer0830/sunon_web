<template>
	<div id="app">
		<router-view />
		<!-- <Login /> -->
		<!-- <Home /> -->
	</div>
</template>

<script>
import Login from './components/system/Login.vue'
import Home from './components/system/Home.vue'

export default {
	name: 'app',
	components: {
		Login,
		Home
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	width: 100%;
}
</style>
