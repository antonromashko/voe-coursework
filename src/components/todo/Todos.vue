<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="700"
  >
    <v-toolbar
      color="blue-grey"
      dark
    >

      <AddTask/>

      <v-tabs v-model="activeTab">
        <v-tab>All</v-tab>
        <v-tab>Completed</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>
      <FormInput
        v-model="value"
        name="search"
        label=""
        type="text"
        :value="value"
        style="background-color: #d0cdcd;
    padding: 5px;"
      />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
      color="error"
    >
      Logout
    </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list
        active-class="blue-grey lighten-5"
      >
        <template v-for="(item, key, index) in filteredTodoItems">
            <v-list-item :key="item.title">
              <v-list-item-avatar>
                    <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" :style="{'text-decoration': item.checked ? 'line-through' : ''}"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-checkbox
                    v-model="item.checked"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>
              <v-btn class="ml-4" icon @click="showMore(key)">
                <v-icon>{{ mdiDotsHorizontal }}</v-icon>
              </v-btn>
              <v-btn
                  v-if="item.moreButtons"
                  class="ml-4" text
                  icon
                  color="red lighten-2"
                  @click="deleteItem(key)"
              >
                <v-icon>{{ mdiDelete }}</v-icon>
              </v-btn>
              <v-btn
                  v-if="item.moreButtons"
                  class="ml-4" text
                  icon
                  color="red lighten-2">
                <v-icon>{{ mdiBorderColor }}</v-icon>
              </v-btn>
          </v-list-item>
          <v-divider
            v-if="index < filteredTodoItems.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-list>
  </v-card>
  </div>

</template>

<script>
import FormInput from "@/components/auth/FormInput.vue";
import AddTask from "@/components/todo/AddTask.vue";
import {mdiBorderColor, mdiDelete, mdiDotsHorizontal} from '@mdi/js';
import { mapState } from 'vuex';

export default {
  name: "Todos",
  components: {
    FormInput,
    AddTask
  },
  data() {
    return {
      activeTab: 0,
      mdiDotsHorizontal: mdiDotsHorizontal,
      mdiDelete: mdiDelete,
      mdiBorderColor: mdiBorderColor,
      value: '',
      moreButtons: false
    }
  },
  computed: {
    ...mapState({
      items: state => state.todosItems
    }),
    filteredTodoItems() {
      if (this.activeTab === 1) {
        return Object.fromEntries(Object.entries(this.items).filter(item => item[1].checked === true))
      }
      return this.items
    }
  },
  methods: {
    showMore(key) {
      Object.keys(this.items).forEach(item => {
        if (item === key) {
          this.items[item].moreButtons = !this.items[item].moreButtons;
        } else {
          this.items[item].moreButtons = false;
        }
      })
    },
    deleteItem(key) {
      this.$store.commit('REMOVE_FROM_TODO_ITEM', key)
    }
  },
  mounted() {
    let res = {
             1: {
          action: '15 min',
          image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
          moreButtons: false,
          checked: false
        },
        2: {
          action: '2 hr',
          image: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: 'me, Scrott, Jennifer',
          moreButtons: false,
          checked: false
        },
        3: {
          action: '6 hr',
          image: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra Adams',
          moreButtons: false,
          checked: false
        },
        4: {
          action: '12 hr',
          image: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: 'Trevor Hansen',
          moreButtons: false,
          checked: false
        },
        5: {
          action: '18hr',
          image: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: 'Britta Holt',
          moreButtons: false,
          checked: false
        }
    }
    this.$store.commit('SET_TODO_ITEM', res)
  }
}
</script>

<style scoped>
</style>