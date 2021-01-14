<template>
  <v-menu
      v-model="menu"
      :close-on-content-click="closeOnContentClick"
      :nudge-width="200"
      offset-x
  >
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs"></slot>
    </template>
    <v-card class="mx-auto" max-width="600" tile>
      <v-list dense>
        <v-list-item-group color="primary" class="spacing-playground pa-6">
          <v-subheader>
            NEW TODO
          </v-subheader>
          <v-divider></v-divider>
          <v-form v-model="valid">
            <v-list-item v-for="(item, key) in newItems" :key="key">
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
        <v-btn text @click="menu = false">
          Cancel
        </v-btn>
        <v-btn :disabled="!valid" color="primary" text @click="saveItem">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { mapState } from "vuex";
import { RULES } from "@/const";

export default {
  name: "AddTask",
  props: {
    itemKey: {
      default: false
    }
  },
  data() {
    return {
      menu: false,
      closeOnContentClick: false,
      newItems: {
          name: {
            label: 'NAME',
            value: '',
            type: 'text',
            counter: RULES.NAME.counter,
            rules: RULES.NAME.rules
          },
          description: {
            label: 'DESCRIPTION',
            value: '',
            type: 'text',
            counter: RULES.DESCRIPTION.counter,
            rules: RULES.DESCRIPTION.rules
          },
          image: {
            label: 'IMAGE',
            value: '',
            type: 'text',
            counter: RULES.IMAGE.counter,
            rules: RULES.IMAGE.rules
          },
        },
      valid: false
    }
  },
  computed: {
    ...mapState({
      items: state => state.todosItems,
      loggedInUser: state => state.loggedInUser
    })
  },
  methods: {
    saveItem() {
      let indexTs = new Date()
      this.menu = false;
      let res = {
        [this.itemKey || indexTs.getTime().toString()]: {
          action: indexTs.toLocaleString(),
          image: this.newItems.image.value,
          description: this.newItems.description.value,
          name: this.newItems.name.value,
          moreButtons: false,
          checked: this.itemKey && this.items[this.itemKey].checked,
          edited: !!this.itemKey
        }
      }
      if (this.itemKey) {
        this.$store.commit('REMOVE_FROM_TODO_ITEM', this.itemKey);
      }
      this.$store.commit('SET_TODO_ITEM', res);
    }
  },
  mounted() {
      if (this.itemKey) {
        Object.keys(this.newItems).forEach(key => this.newItems[key].value = this.items[this.itemKey][key])
      }
  }
}
</script>

<style scoped>

</style>