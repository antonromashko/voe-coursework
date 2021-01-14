<template>
  <v-list-item style="width: 100%">
    <slot name="avatar"></slot>
    <v-list-item-content>
      <v-list-item-action-text v-text="'edited'" :style="editedStyle"></v-list-item-action-text>
      <v-list-item-title
          v-text="name"
          :style="{'text-decoration': completed ? 'line-through' : ''}">
      </v-list-item-title>
      <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
    </v-list-item-content>
    <slot name="action"></slot>
    <slot name="add-task"></slot>
  </v-list-item>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    name: {
      type: String,
      required: true
    },
    edited: {
      type: Boolean,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    moreButtons: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    editedStyle() {
      if (!this.edited) {
        return {
          color: 'white'
        }
      }
      return {}
    }
  }
}
</script>

<style scoped>

</style>