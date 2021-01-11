<template>
  <transition name="formTransition" appear>
    <div class="input-group m-1 p-2">
      <div class="input-group-prepend" style="width: 120px;">
        <span class="input-group-text w-100">{{ label }}</span>
      </div>
      <input
          class="form-control"
          :type="type"
          :value="value"
          @input="$emit('input', $event.target.value, name)">
    </div>
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
  label {
    display: flex;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    input {
      max-width: 150px;
      min-width: 70px;
      width: 100px;
      padding: 5px;
    }
  }
</style>