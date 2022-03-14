import Vue from 'vue'
import Router from 'vue-router'

import vMain from '@/components/v-main.vue'
import vCountryCard from '@/components/v-country-card.vue'


Vue.use(Router);

let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'list',
			component: vMain,
			props: true
		},
		{
			path: '/card',
			name: 'card',
			component: vCountryCard,
			props: true
		}

	]
})

export default router;