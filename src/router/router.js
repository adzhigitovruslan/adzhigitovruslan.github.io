import Vue from "vue";
import Router from "vue-router";
import vDishesCatalog from "@/components/v-dishes-catalog";
import vCart from "@/components/v-cart";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: vDishesCatalog,
    },
    {
      path: "/cart",
      name: "cart",
      component: vCart,
      props: true,
    },
  ],
});

export default router;
