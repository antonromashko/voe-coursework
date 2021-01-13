<template>
  <div>
    <v-card class="mx-auto" max-width="700">
      <ToolBar/>
      <v-list two-line>
        <v-list active-class="blue-grey lighten-5">
          <template v-for="(item, key, index) in filteredTodoItems">
            <v-list-item :key="item.name">
              <v-list-item-avatar>
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-action-text v-if="item.edited" v-text="'edited'"></v-list-item-action-text>
                <v-list-item-title
                    v-text="item.name"
                    :style="{'text-decoration': item.checked ? 'line-through' : ''}">
                </v-list-item-title>
                <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                <v-checkbox v-model="item.checked" color="secondary" @change="todoItemChange"></v-checkbox>
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
              <AddTask v-if="item.moreButtons" :itemKey="key">
                <template #activator="{ on, attrs }">
                  <v-btn
                      v-bind="attrs" v-on="on"
                      class="ml-4"
                      text
                      icon
                      color="red lighten-2"
                  >
                    <v-icon>{{ mdiBorderColor }}</v-icon>
                  </v-btn>
                </template>
              </AddTask>
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
import ToolBar from "@/components/todo/ToolBar.vue";
import AddTask from "@/components/todo/AddTask.vue";
import { mdiBorderColor, mdiDelete, mdiDotsHorizontal } from '@mdi/js';
import { mapState } from 'vuex';

export default {
  name: "Todos",
  components: {
    AddTask,
    ToolBar
  },
  data() {
    return {
      activeTab: 0,
      mdiDotsHorizontal: mdiDotsHorizontal,
      mdiDelete: mdiDelete,
      mdiBorderColor: mdiBorderColor,
      moreButtons: false
    }
  },
  computed: {
    ...mapState({
      items: state => state.todosItems,
      loggedInUser: state => state.loggedInUser
    }),
    filteredTodoItems() {
      return Object.fromEntries(Object.entries(this.items).filter(item => {
        return this.activeTab === 1 ? item[1].checked === true : item[1].checked === false
      }))
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
      this.$store.commit('REMOVE_FROM_TODO_ITEM', key);
    },
    todoItemChange() {
      this.$store.commit('SET_TODO_ITEM', this.items);
    }
  },
  created() {
    const user = localStorage.getItem('logged_in')
    //
    this.$store.commit('SET_LOGIN_USER', user);
    this.$store.commit('SET_TODO_ITEM', JSON.parse(localStorage.getItem(user)).todos)
  }
}
</script>

<style scoped>
</style>