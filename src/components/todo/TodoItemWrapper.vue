<template>
  <v-list-item>
    <slot name="avatar"></slot>
    <slot name="content"></slot>
    <slot name="action"></slot>
    <slot name="add-task"></slot>
  </v-list-item>
</template>

<script>
export default {
  name: "TodoItemWrapper"
}
</script>

<style scoped>

</style>