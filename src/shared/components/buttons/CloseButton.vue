<template>
  <button class="close-button" type="button" @click="clickEvent">
    <!-- TODO implement dynamic icon -->
    <img
      class="button__icon"
      src="@/assets/icons/close-naked.svg"
      alt="close"
    />
  </button>
</template>

<script>
export default {
  name: "CloseButton",
  methods: {
    clickEvent() {
      this.$emit("click-event");
    },
  },
};
</script>

<style scoped lang="scss">
.close-button {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #d1d1d1;
  cursor: pointer;

  .button__icon {
    height: 16px;
    width: 16px;
  }
}
</style>
