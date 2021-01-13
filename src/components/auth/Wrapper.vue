<template>
  <div>
    <form class="form">
      <header>
        <slot name="title"></slot>
      </header>
        <v-form v-model="valid">
          <v-list-item v-for="(item, key) in formData" :key="key">
            <v-list-item-content>
              <slot :name="item.name" :[item.name]="item"></slot>
            </v-list-item-content>
          </v-list-item>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!valid" @click="$emit('click', formData)">{{ currentButtonName }}</v-btn>
        </v-card-actions>
    </form>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  data() {
    return {
      pendingButton: 'Sending...',
      isPending: false,
      valid: false
    }
  },
  props: {
    buttonName: {
      default: 'SAVE'
    },
    formData: {
      type: [Array, Object],
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
    div {
      padding: 10px;
    }
  }
}
</style>