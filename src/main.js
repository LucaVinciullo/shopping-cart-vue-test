import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CurrencyFilter from "@/shared/filters/currency.filter";
import ApiService from "@/core/api/api.service";

Vue.config.productionTip = false;

Vue.filter("currency", CurrencyFilter);

ApiService.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
