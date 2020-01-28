<template>
	<v-app>
		<Menu />
		<Toolbar />
		<Carousel />
		<Footer />
	</v-app>
</template>

<script>
import Menu from './components/Menu'
import Toolbar from './components/Toolbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

export default {
	components:{
		Menu,
		Toolbar,
		Carousel,
		Footer
	}
}
</script>
