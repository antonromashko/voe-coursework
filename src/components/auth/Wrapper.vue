<template>
  <div>
    <form class="form">
      <header>
        <slot name="title"></slot>
      </header>
      <template>
        <slot v-for="item in formData" :name="item.name" :[item.name]="item"></slot>
      </template>
      <button class="btn btn-outline-success my-2 my-sm-0" type="button" :disabled="isPending" @click="$emit('click')">{{ currentButtonName }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  data() {
    return {
      pendingButton: 'Sending...',
      isPending: false
    }
  },
  props: {
    buttonName: {
      default: 'SAVE'
    },
    formData: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentButtonName() {
      return this.isPending ? this.pendingButton : this.buttonName
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  button {
    width: 100px;
    height: 40px;
    align-self: flex-end;
    padding: 8px;
    margin: 8px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 30px 30px 30px;
  .form-title {
    display: block;
    text-align: center;
  }
  div {
    width: 500px;
    align-items: center;
    display: flex;
    justify-content: left;
    ::v-deep{
      label {
        width: 40%;
        padding: 10px;
      }
      input {
        border-style: solid;
        border-color: rgba(3, 3, 3, 0.12);
        border-radius: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        padding: 5px;
      }
    }
    div {
      padding: 10px;
    }
  }
}
</style>