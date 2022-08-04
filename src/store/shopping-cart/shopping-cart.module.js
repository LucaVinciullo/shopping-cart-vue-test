import { CartApiService } from "@/core/api/cart-api.service";
import {
  DELETE_CART_PRODUCT,
  GET_SHOPPING_CART,
  POST_CHECKOUT,
} from "./shopping-cart.actions.type";
import { SAVE_CART_PRODUCTS } from "./shopping-cart.mutations.type";
import * as lodash from "lodash";

const initialState = {
  // TODO save cartId on login
  cartId: "1",
  // TODO use a map instead of an array if carts have many different items
  cartProductList: null,
};

export const state = { ...initialState };

export const actions = {
  async [GET_SHOPPING_CART](context) {
    const { data } = await CartApiService.getShoppingCart(context.state.cartId);
    context.commit(SAVE_CART_PRODUCTS, lodash.get(data, "items"));
  },
  [DELETE_CART_PRODUCT](context, sku) {
    if (context.state.cartProductList && typeof sku === "string") {
      context.commit(
        SAVE_CART_PRODUCTS,
        context.state.cartProductList.filter((product) => product.sku !== sku)
      );
    } else {
      /* This is a developement issue, log the error, the user should never reach this state */
      console.error(`Invalid sku (${sku}) for product, impossible to delete`);
    }
  },
  async [POST_CHECKOUT](context) {
    if (lodash.get(context.state.cartProductList, "length")) {
      const payload = {
        cart_id: context.state.cartId,
        items: context.state.cartProductList.map(({ sku, qty }) => ({
          sku,
          qty,
        })),
      };
      await CartApiService.postCheckout(payload);
      context.commit(SAVE_CART_PRODUCTS, null);
    } else {
      console.error(
        `There are no items to checkout in the cart (cart-id: ${context.state.cartId})`
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
