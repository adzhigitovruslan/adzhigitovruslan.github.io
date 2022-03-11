import Vue from 'vue'
import { Router, createWebHistory } from 'vue-router'

import vMain from '@/components/v-main.vue'
import vCountryCard from '@/components/v-country-card.vue'


Vue.use(Router);

let router = new Router({
	history: createWebHistory(),
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