import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "shoppingCart",
    component: () => import("../views/features/ShoppingCart.vue"),
  },
  {
    path: "/shoppingCart",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
