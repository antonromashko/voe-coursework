<template>
  <div>
    <v-btn
      v-if="moreButtons"
      class="ml-4" text
      icon
      color="red lighten-2"
      @click="$emit('deleteItem')"
  >
    <v-icon>{{ mdiDelete }}</v-icon>
  </v-btn>
  <v-btn v-bind="attrs" v-on="action" class="ml-4" text icon color="red lighten-2">
    <v-icon>{{ mdiBorderColor }}</v-icon>
  </v-btn>
  </div>
</template>

<script>
import { mdiBorderColor, mdiDelete } from "@mdi/js";
export default {
  name: "MoreButtons",
  props: {
    moreButtons: {
      type: Boolean
    },
    attrs: {
      required: true
    },
    action: {
      required: true
    }
  },
  data() {
    return {
      mdiDelete: mdiDelete,
      mdiBorderColor: mdiBorderColor
    }
  }
}
</script>

<style scoped>

</style>