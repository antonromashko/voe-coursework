<template>
  <transition name="formTransition" appear>
      <v-text-field
        :counter="counter"
        :label="label"
        :type="type"
        :rules="rules"
        required
        @input="input"
      ></v-text-field>
  </transition>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    counter: {
      default: 10
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    input(value) {
      this.$emit('input', value, name)
    }
  }
}
</script>

<style lang="scss" scoped>
.formTransition {
  width: 100%;
  &-leave-active,
  &-enter-active {
    transition: opacity .8s;
  }
  &-enter,
  &-leave-to{
    opacity: 0;
  }
}
</style>