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
    GET_COUNTRIES_FROM_API({ commit }) {
      return axios(
        "https://restcountries.com/v2/all",
        {
          method: "GET",
        }
      )
        .then((countries) => {
          commit("SET_COUNTRIES_TO_STATE", countries.data);
          return countries;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    COUNTRIES(state) {
      return state.countries;
    },
  },
};
