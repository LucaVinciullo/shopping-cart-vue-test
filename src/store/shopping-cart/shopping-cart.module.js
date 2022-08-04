import { CartApiService } from "@/core/api/cart-api.service";
import {
  DELETE_CART_PRODUCT,
  GET_SHOPPING_CART,
} from "./shopping-cart.actions.type";
import { SAVE_CART_PRODUCTS } from "./shopping-cart.mutations.type";

const initialState = {
  cartProductList: null,
};

export const state = { ...initialState };

export const actions = {
  async [GET_SHOPPING_CART](context, id) {
    const { data } = await CartApiService.getShoppingCart(id);
    context.commit(SAVE_CART_PRODUCTS, data && data.items);
  },
  [DELETE_CART_PRODUCT](context, sku) {
    if (context.state.cartProductList && typeof sku === "string") {
      context.commit(
        SAVE_CART_PRODUCTS,
        context.state.cartProductList.filter((product) => product.sku !== sku)
      );
    }
  },
};

export const mutations = {
  [SAVE_CART_PRODUCTS](state, products) {
    state.cartProductList = products;
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
