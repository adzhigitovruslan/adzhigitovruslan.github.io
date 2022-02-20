export default {
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_CART({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART({ commit }, index) {
      commit("DECREMENT", index);
    },
    SET_QUANTITY({ commit }, index) {
      commit("CALC_QUANTITY", index);
    },
  },
  mutations: {
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  state: {
    cart: [],
  },
  getters: {
    CART(state) {
      return state.cart;
    },
  },
};
