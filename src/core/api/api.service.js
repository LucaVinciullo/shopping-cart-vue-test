import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL =
      "https://eataly-test-dev.herokuapp.com/api/v1/";
  },

  get(resource, param) {
    return Vue.axios.get(`${resource}/${param}`).catch((error) => {
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
