<template>
  <div class="shopping-cart">
    <CartProduct
      class="cart-item"
      v-for="(product, index) in productList"
      :key="index"
      product="product"
      @cancel-product-event="cancelProduct(product, index)"
    >
    </CartProduct>

    <div class="cart-total">
      <span class="text--bold">CART SUBTOTAL:</span>
      <!-- TODO use filter | pipe for currency presentation -->
      <span class="text--bold"> {{ cartTotal }}</span>
    </div>

    <div class="button-footer">
      <TextButton
        label="VIEW CART"
        :disabled="true"
        @click-event="viewCart"
      ></TextButton>
      <TextButton label="CHECKOUT" @click-event="checkoutCart"></TextButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
      // TODO darken the close button
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

export default {
  name: "ShoppingCartView",
  components: {
    CartProduct,
    TextButton,
  },
  data() {
    return {
      productList: ["TODO", "TODO", "TODO"],
    };
  },
  methods: {
    viewCart() {
      console.log("viewCart");
    },
    checkoutCart() {
      console.log("checkoutCart");
    },
    cancelProduct(product, index) {
      console.log("cancelProduct", product, index);
    },
  },
  computed: {
    cartTotal() {
      // TODO reduce cart;
      return 12.34;
    },
  },
};
</script>
