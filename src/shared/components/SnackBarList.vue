<template>
  <div class="snack-bar-list" :show="snacks?.length">
    <div
      v-for="(snack, i) in snacks"
      :key="i"
      class="snack"
      :class="{
        failure: snack.type === 'failure',
        success: snack.type === 'success',
      }"
    >
      {{ snack.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SnackBarList",
  computed: {
    ...mapGetters(["snackBarList"]),
    snacks() {
      return this.snackBarList || null;
    },
  },
};
</script>

<style scoped lang="scss">
.snack-bar-list {
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  z-index: 2000;
  width: 100%;

  .snack {
    line-height: 50px;
    width: 100%;
    text-align: center;
    &:first-child {
      box-shadow: 0 -4px 8px #777777;
    }
    &.success {
      background-color: lightgreen;
    }
    &.failure {
      background-color: lightcoral;
    }
  }
}
</style>
