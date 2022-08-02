<template>
  <div class="shopping-cart">
    <CartProduct
      class="cart-item"
      v-for="(product, index) in cartProductList"
      :key="index"
      :product="product"
      @cancel-product-event="cancelProduct(product, index)"
    >
    </CartProduct>

    <div class="cart-total">
      <span class="text--bold text--lightgrey">CART SUBTOTAL:</span>
      <span class="text--bold text--darkgrey"> {{ cartTotal | currency }}</span>
    </div>

    <div class="button-footer">
      <TextButton
        label="VIEW CART"
        :disabled="!!cartProductList?.length"
        @click-event="viewCart"
      ></TextButton>
      <TextButton
        label="CHECKOUT"
        :disabled="!cartProductList?.length"
        @click-event="checkoutCart"
      ></TextButton>
    </div>
  </div>
</template>

<style lang="scss">
.shopping-cart {
  min-width: 290px;
  max-height: calc(100vh - 40px);
  max-width: calc(100vw - 160px);
  background-color: #ffffff;
  padding-bottom: 16px;
  overflow: auto;

  .cart-item {
    padding: 16px;
    &:nth-child(even) {
      background-color: #f4f4f4;
      button.close-button {
        background-color: #777777;
      }
    }
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    padding: 8px 0 24px 0;
    margin: 0 16px;
    border-bottom: 1px solid #f0cac9;
  }

  .button-footer {
    padding: 8px 16px 0 16px;
    > * {
      display: block;
      width: 100%;
      margin-top: 8px;
    }
  }

  .text {
    &--darkgrey {
      color: #777777;
    }
    &--lightgrey {
      color: #b5b5b5;
    }
  }
}

@media screen and (max-width: 450px) {
  .shopping-cart {
    max-width: calc(100vw - 80px);
  }
}
</style>

<script>
import CartProduct from "@/components/shopping-cart/CartProduct.vue";
import TextButton from "@/shared/components/buttons/TextButton.vue";
import store from "@/store";
import * as shoppingCartActions from "@/store/shopping-cart/shopping-cart.actions.type";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCartView",
  components: {
    CartProduct,
    TextButton,
  },
  methods: {
    viewCart() {
      // TODO parm "1"
      store.dispatch(shoppingCartActions.GET_SHOPPING_CART, "1");
    },
    checkoutCart() {
      console.log("checkoutCart");
    },
    cancelProduct(product) {
      store.dispatch(shoppingCartActions.DELETE_CART_PRODUCT, product.sku);
    },
  },
  computed: {
    ...mapGetters(["cartProductList"]),
    cartTotal() {
      if (this.cartProductList && this.cartProductList.length) {
        return this.cartProductList.reduce((sum, product) => {
          /* No need to round decimals */
          sum += product.qty * product.price;
          return sum;
        }, 0);
      }
      return 0;
    },
  },
  mounted() {
    this.viewCart();
  },
};
</script>
