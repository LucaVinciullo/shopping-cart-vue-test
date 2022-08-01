<template>
  <div class="cart-product">
    <span>
      <img src="@/assets/logo.png" />
    </span>
    <span>
      <p class="text--bold">Product name</p>
      <p class="text--light">Quantity X Price</p>
    </span>
    <span>
      <CloseButton @click-event="cancelProduct" />
    </span>
  </div>
</template>

<script>
import CloseButton from "@/shared/components/buttons/CloseButton.vue";

export default {
  name: "CartProduct",
  components: {
    CloseButton,
  },
  props: {
    product: {
      type: String,
      required: true,
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
    flex: 8;
    padding: 0 4px;

    &:first-child {
      flex: 3;
      display: flex;
      justify-content: flex-start;
      img {
        height: 40px;
        width: 40px;
      }
    }

    &:last-child {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
