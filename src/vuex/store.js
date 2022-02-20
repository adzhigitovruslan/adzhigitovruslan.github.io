import Vue from "vue";
import Vuex from "vuex";
import cart_mod from "@/vuex/modules/cart.js";
import products_mod from "@/vuex/modules/products.js";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    products_mod,
    cart_mod,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
