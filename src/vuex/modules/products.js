import axios from "axios";

export default {
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(
        "https://my-json-server.typicode.com/adzhigitovruslan/adzhigitovruslan.github.io/db",
        {
          method: "GET",
        }
      )
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  state: {
    products: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
};
