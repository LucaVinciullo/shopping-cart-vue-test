import { CartApiService } from "@/core/api/cart-api.service";
import { GET_SHOPPING_CART, RESET_STATE } from "./shopping-cart.actions.type";
import {
  CLEAR_STATE,
  SAVE_CART_PRODUCTS,
} from "./shopping-cart.mutations.type";

const initialState = {
  cartProductList: null,
};

export const state = { ...initialState };

export const actions = {
  async [GET_SHOPPING_CART](context, id) {
    const { data } = await CartApiService.getShoppingCart(id);
    context.commit(SAVE_CART_PRODUCTS, data && data.items);
  },
  [RESET_STATE]({ commit }) {
    commit(CLEAR_STATE);
  },
};

export const mutations = {
  [SAVE_CART_PRODUCTS](state, products) {
    state.cartProductList = products;
  },
  [CLEAR_STATE]() {
    // TODO should use initialState
    state.cartProductList = null;
  },
};

const getters = {
  cartProductList(state) {
    return state.cartProductList;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
