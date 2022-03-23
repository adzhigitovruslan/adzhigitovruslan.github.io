import Vue from "vue";
import VueRouter from "vue-router";
import vMain from "../components/v-main.vue";
import firebase from "firebase/compat/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: vMain,
    children: [
      {
        path: "/",
        name: "login",
        component: () => import("@/components/v-login.vue"),
      },
      {
        path: "/sign-up",
        name: "sign",
        component: () => import("@/components/v-sign.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "mainLayout",
    meta: { auth: true },
    component: () => import("@/components/v-main-layout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { auth: true },

        component: () => import("@/views/v-home.vue"),
      },
      {
        path: "/about",
        name: "about",
        meta: { auth: true },

        component: () => import("@/views/v-about.vue"),
      },
      {
        path: "/blog",
        name: "blog",
        meta: { auth: true },

        component: () => import("@/views/v-blog.vue"),
      },
      {
        path: "/price",
        name: "price",
        meta: { auth: true },

        component: () => import("@/views/v-price.vue"),
      },
    ],
  },
  {
    path: "*/*",
    redirect: { name: "home" },
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("@/components/v-error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((mainLayout) => mainLayout.meta.auth);

  if (requireAuth && !currentUser) {
    next("/?message=login");
  } else {
    next();
  }
});

export default router;
