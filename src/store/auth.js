/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/compat/app";
import register from "register-service-worker";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit("SET_ERROR", error);
        throw error;
      }
    },
    async logout() {
      await firebase.auth().signOut();
    },
    // eslint-disable-next-line no-empty-pattern
    async register({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        commit("SET_ERROR", error);
        throw error;
      }
    },
  },
};
