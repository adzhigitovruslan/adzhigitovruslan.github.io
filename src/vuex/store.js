import Vue from 'vue'
import Vuex from 'vuex'
import countries from "@/vuex/modules/countries.js";


Vue.use(Vuex);

let store = new Vuex.Store({
	modules: {
		countries
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {}
})

export default store;