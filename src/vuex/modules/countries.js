import axios from "axios";

export default {
  state: {
    countries: [],
  },
  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
      state.countries = countries;
    },
  },
  actions: {
    async GET_COUNTRIES_FROM_API({ commit }) {
      try {
        const countries = await axios(
          "https://restcountries.com/v2/all",
          {
            method: "GET",
          }
        );
        commit("SET_COUNTRIES_TO_STATE", countries.data);
        return countries;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {
    COUNTRIES(state) {
      return state.countries;
    },
  },
};
