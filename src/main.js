import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import "materialize-css/dist/js/materialize.min";
import messagePlugin from "@/utils/message.plugin.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import Loader from "@/components/v-loader.vue";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.use(messagePlugin);
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyAyI9TQnYDB3clO1d2vKTeFcX9-ICUS07M",
  authDomain: "vue-digital.firebaseapp.com",
  projectId: "vue-digital",
  storageBucket: "vue-digital.appspot.com",
  messagingSenderId: "249613501319",
  appId: "1:249613501319:web:88667b59ea0b497d0e0922",
  measurementId: "G-2L4ME82BF5",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
