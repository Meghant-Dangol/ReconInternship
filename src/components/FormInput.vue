<template>
  <div class="form-group my-4">
    <label :for="label" class="form-label">{{ label }}</label>
    <input :type="type" v-model="inputValue" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ["label", "type", "modelValue"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style></style>
