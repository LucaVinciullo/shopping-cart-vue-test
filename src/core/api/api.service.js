import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store";
import * as loadingActions from "@/store/loading/loading.actions.type";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL =
      "https://eataly-test-dev.herokuapp.com/api/v1/";
  },

  get(resource, param) {
    store.dispatch(loadingActions.START_LOADING);

    return Vue.axios
      .get(`${resource}/${param}`)
      .then((data) => {
        store.dispatch(loadingActions.END_LOADING);
        return data;
      })
      .catch((error) => {
        throw new Error(`[${resource}] ApiService ${error}`);
      });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params).catch((error) => {
      throw new Error(`[${resource}] ApiService ${error}`);
    });
  },
};

export default ApiService;
