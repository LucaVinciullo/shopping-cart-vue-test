import {
  OPEN_SUCCESS_SNACK_BAR,
  OPEN_FAILURE_SNACK_BAR,
} from "./modal.actions.type";
import { ADD_SNACK_BAR } from "./modal.mutations.type";

const initialState = {
  snackBarList: [],
};

export const state = { ...initialState };

export const actions = {
  [OPEN_SUCCESS_SNACK_BAR](context, text) {
    context.commit(ADD_SNACK_BAR, { text, type: "success" });
  },
  [OPEN_FAILURE_SNACK_BAR](context, text) {
    context.commit(ADD_SNACK_BAR, { text, type: "failure" });
  },
};

export const mutations = {
  [ADD_SNACK_BAR](state, snackObj) {
    const { text, type } = snackObj;
    state.snackBarList = [...state.snackBarList, { text, type }];
    setTimeout(() => {
      state.snackBarList.shift();
      state.snackBarList = [...state.snackBarList];
    }, 2500);
  },
};

const getters = {
  snackBarList(state) {
    return state.snackBarList;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
