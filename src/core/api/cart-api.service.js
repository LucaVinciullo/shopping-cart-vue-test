import ApiService from "./api.service";

export const CartApiService = {
  getShoppingCart(id) {
    return ApiService.get("cart", id);
  },
};
