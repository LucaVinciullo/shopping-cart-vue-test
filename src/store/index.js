import Vue from "vue";
import Vuex from "vuex";
import ShoppingCart from "./shopping-cart/shopping-cart.module";
import Loading from "./loading/loading.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ShoppingCart,
    Loading,
  },
});
