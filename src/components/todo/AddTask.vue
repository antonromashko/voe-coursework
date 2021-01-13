<template>
  <v-menu v-model="menu" :close-on-content-click="closeOnContentClick" :nudge-width="200"
      offset-x>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card
    class="mx-auto"
    max-width="500"
    tile
  >
    <v-list dense>
      <v-list-item-group
        color="primary"
        class="spacing-playground pa-6"
      >
        <v-subheader>
          NEW TODO
        </v-subheader>
        <v-divider></v-divider>
        <v-form v-model="valid">
          <v-list-item
          v-for="(item, key) in items"
          :key="key"
        >
          <v-list-item-content>
            <v-text-field
            v-model="item.value"
            :rules="item.rules"
            :counter="item.counter"
            :label="item.label"
            required
          ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        </v-form>
      </v-list-item-group>
    </v-list>
      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            :disabled="!valid"
            color="primary"
            text
            @click="saveItem"
          >
            Save
          </v-btn>
        </v-card-actions>
  </v-card>
  </v-menu>
</template>

<script>

export default {
  name: "AddTask",
  data() {
    return {
      menu: false,
      closeOnContentClick: false,
      items: {
          name: {
            label: 'NAME',
            value: '',
            type: 'text',
            counter: 10,
            rules: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
          },
          description: {
            label: 'DESCRIPTION',
            value: '',
            type: 'text',
            counter: 20,
            rules: [
              v => !!v || 'Name is required',
              v => v.length <= 20 || 'Name must be less than 10 characters',
            ],
          },
          image: {
            label: 'IMAGE',
            value: '',
            type: 'text',
            rules: [
              v => !!v || 'Name is required',
            ],
          },
        },
      valid: false
    }
  },
  methods: {
    saveItem() {
      this.menu = false;
      let res = {
        [new Date().getTime()]: {
          action: '15 min',
          image: this.items.image.value,
          subtitle: this.items.description.value,
          title: this.items.name.value,
          moreButtons: false,
          checked: false
        }
      }
      this.$store.commit('SET_TODO_ITEM', res)
    }
  }
}
</script>

<style scoped>

</style>