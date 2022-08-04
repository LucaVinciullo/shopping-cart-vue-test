import { END_LOADING, START_LOADING } from "./loading.actions.type";
import {
  INCREMENT_LOADING_COUNTER,
  DECREMENT_LOADING_COUNTER,
} from "./loading.mutations.type";

const initialState = {
  loadingCounter: 0,
};

export const state = { ...initialState };

export const actions = {
  [START_LOADING](context) {
    context.commit(INCREMENT_LOADING_COUNTER);
  },
  [END_LOADING](context) {
    context.commit(DECREMENT_LOADING_COUNTER);
  },
};

export const mutations = {
  [INCREMENT_LOADING_COUNTER](state) {
    state.loadingCounter++;
  },
  [DECREMENT_LOADING_COUNTER]() {
    setTimeout(() => {
      /* Prevents loading flickering for chained apis */
      state.loadingCounter--;
    }, 250);
  },
};

const getters = {
  flagLoader(state) {
    return !!state.loadingCounter;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
