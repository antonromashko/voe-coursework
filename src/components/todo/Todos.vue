<template>
  <div>
    <v-card class="mx-auto" max-width="700">
      <ToolBar @search="searchTodo"/>
      <v-list two-line>
        <v-list active-class="blue-grey lighten-5">
          <template v-for="(item, key, index) in filteredTodoItems">
            <todo-item
                :name="item.name"
                :key="key"
                :image="item.image"
                :edited="item.edited"
                :completed="item.checked"
                :description="item.description"
                :more-buttons="item.moreButtons"
                @itemChange="todoItemChange"
                @showMoreButtons="showMore(key)"
                @deleteItem="deleteItem(key)"
            >
              <template #add-task>
                <AddTask v-if="item.moreButtons" :itemKey="key">
                  <template #activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="ml-4" text icon color="red lighten-2">
                      <v-icon>{{ mdiBorderColor }}</v-icon>
                    </v-btn>
                  </template>
                </AddTask>
              </template>
              <template #action>
                <v-list-item-action>
                  <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                  <v-checkbox v-model="item.checked" color="secondary" @change="todoItemChange"></v-checkbox>
                </v-list-item-action>
              </template>
            </todo-item>
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
import TodoItem from "@/components/todo/TodoItem.vue";
import {mapState} from 'vuex';
import AddTask from "@/components/todo/AddTask";
import {mdiBorderColor} from "@mdi/js";

export default {
  name: "Todos",
  components: {
    ToolBar,
    TodoItem,
    AddTask
  },
  data() {
    return {
      searchValue: '',
      mdiBorderColor: mdiBorderColor,
    }
  },
  computed: {
    ...mapState({
      items: state => state.todosItems,
      loggedInUser: state => state.loggedInUser,
      activeTab: state => state.activeTab
    }),
    filteredTodoItems() {
      return Object.fromEntries(Object.entries(this.items).filter(item => {
        if (item[1].name.toString().indexOf(this.searchValue) >= 0 || item[1].description.toString().indexOf(this.searchValue) >=0) {
          return this.activeTab === 1 ? item[1].checked === true : item[1].checked === false
        }
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
    },
    searchTodo(val) {
      this.searchValue = val
    }
  },
  created() {
    const user = localStorage.getItem('logged_in');
    //
    this.$store.commit('SET_LOGIN_USER', user);
    this.$store.commit('SET_TODO_ITEM', JSON.parse(localStorage.getItem(user)).todos);
  }
}
</script>

<style scoped>
</style>