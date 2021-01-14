<template>
  <v-list-item :key="name">
    <v-list-item-avatar>
      <v-img :src="image"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-action-text v-if="edited" v-text="'edited'"></v-list-item-action-text>
      <v-list-item-title
          v-text="name"
          :style="{'text-decoration': completed ? 'line-through' : ''}">
      </v-list-item-title>
      <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
    </v-list-item-content>
    <slot name="action"></slot>
    <v-btn class="ml-4" icon @click="$emit('showMoreButtons')">
      <v-icon>{{ mdiDotsHorizontal }}</v-icon>
    </v-btn>
    <v-btn
        v-if="moreButtons"
        class="ml-4" text
        icon
        color="red lighten-2"
        @click="$emit('deleteItem')"
    >
      <v-icon>{{ mdiDelete }}</v-icon>
    </v-btn>
    <slot name="add-task"></slot>
  </v-list-item>
</template>

<script>
import { mdiDelete, mdiDotsHorizontal } from "@mdi/js";

export default {
  name: "TodoItem",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
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
  data() {
    return {
      mdiDotsHorizontal: mdiDotsHorizontal,
      mdiDelete: mdiDelete
    }
  }
}
</script>

<style scoped>

</style>