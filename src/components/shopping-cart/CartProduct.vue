<template>
  <div class="cart-product" v-if="product">
    <span class="product__image">
      <img :src="product.image" />
    </span>
    <span>
      <p class="text--bold">{{ product.name | capitalize }}</p>
      <p class="text--light product__text--light-grey">
        {{ product.qty }} X {{ product.price | currency }}
      </p>
    </span>
    <span class="product__action">
      <CloseButton @click-event="cancelProduct" />
    </span>
  </div>
</template>

<script>
import CloseButton from "@/shared/components/buttons/CloseButton.vue";

/**
 *  model {
 *    image: string
 *    name: string
 *    price: number
 *    qty: number
 *    sku: string
 *  }
 */
export default {
  name: "CartProduct",
  components: {
    CloseButton,
  },
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
  methods: {
    cancelProduct() {
      this.$emit("cancel-product-event");
    },
  },
};
</script>

<style scoped lang="scss">
.cart-product {
  padding: 8px 0;
  display: flex;

  > span {
    flex: 1;
    padding: 0 8px;

    &.product__image {
      padding-left: 0;
      flex: 0;
      display: flex;
      justify-content: flex-start;
      img {
        height: 40px;
        width: 40px;
      }
    }

    &.product__action {
      flex: 0;
      padding-right: 0;
      display: flex;
      justify-content: flex-end;
    }

    .product__text--light-grey {
      color: #777777;
    }
  }
}
</style>
