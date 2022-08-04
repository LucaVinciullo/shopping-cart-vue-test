import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store";
import * as loadingActions from "@/store/loading/loading.actions.type";
import * as modalActions from "@/store/modal/modal.actions.type";

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
        store.dispatch(loadingActions.END_LOADING);
        store.dispatch(
          modalActions.OPEN_FAILURE_SNACK_BAR,
          `Error: API ${resource}.`
        );
        console.error(`[${resource}] ApiService: ${error}`);
      });
  },

  post(resource, params) {
    store.dispatch(loadingActions.START_LOADING);
    return Vue.axios
      .post(`${resource}`, params)
      .then((data) => {
        store.dispatch(loadingActions.END_LOADING);
        store.dispatch(
          modalActions.OPEN_SUCCESS_SNACK_BAR,
          `The ${resource} API was successful.`
        );
        return data;
      })
      .catch((error) => {
        store.dispatch(loadingActions.END_LOADING);
        store.dispatch(
          modalActions.OPEN_FAILURE_SNACK_BAR,
          `Error: API ${resource}.`
        );
        console.error(`[${resource}] ApiService: ${error}`);
      });
  },
};

export default ApiService;
