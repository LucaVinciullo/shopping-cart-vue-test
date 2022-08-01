<template>
  <button
    class="text-button"
    type="button"
    @click="clickEvent"
    :class="{ disabled: disabled }"
    v-bind:tabindex="tabindex"
  >
    <span> {{ label }} </span>
  </button>
</template>

<script>
export default {
  name: "TextButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    clickEvent() {
      if (!this.disabled) {
        this.$emit("click-event");
      }
    },
  },
  computed: {
    tabindex() {
      if (this.disabled) {
        return -1;
      }
      return 0;
    },
  },
};
</script>

<style scoped lang="scss">
.text-button {
  padding: 16px;
  background-color: #131313;
  color: #f4f4f4;
  cursor: pointer;

  &.disabled {
    cursor: unset;
    opacity: 0.3;
  }
}
</style>
