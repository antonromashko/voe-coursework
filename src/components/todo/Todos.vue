<template>
  <div>
    <v-card class="mx-auto" max-width="700">
      <ToolBar @pageChange="pageChange"/>

      <RowPage
          v-if="filteredTodoItems && Object.keys(filteredTodoItems).length > 0 && isRowPage"
          @todoItemChange="todoItemChange"
          @showMore="showMore"
          @deleteItem="deleteItem"/>
      <BlockPage
          v-else-if="filteredTodoItems && Object.keys(filteredTodoItems).length > 0 && !isRowPage"
          @showMore="showMore"
          @deleteItem="deleteItem"/>
      <v-list-item-subtitle
          v-else
          v-text="'No data'"
          class="font-weight-medium text-center text-md-body-1"
      >
      </v-list-item-subtitle>
    </v-card>
  </div>
</template>

<script>
import ToolBar from "@/components/todo/ToolBar.vue";
import { mapState, mapGetters } from 'vuex';
import RowPage from "@/components/todo/RowPage.vue";
import BlockPage from "@/components/todo/BlockPage.vue";

export default {
  name: "Todos",
  components: {
    ToolBar,
    RowPage,
    BlockPage
  },
  data() {
    return {
      isRowPage: true
    }
  },
  computed: {
    ...mapState({
      items: state => state.todosItems,
      loggedInUser: state => state.loggedInUser,
      activeTab: state => state.activeTab,
      history: state => state.historyData
    }),
    ...mapGetters({
      filteredTodoItems: 'GET_FILTERED_TODO_ITEMS'
    })
  },
  methods: {
    pageChange(val) {
      this.isRowPage = val;
    },
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
      let name = this.items[key].name
      this.$store.commit('REMOVE_FROM_TODO_ITEM', key);
      this.$store.commit('SET_HISTORY_ROW', [{
        user: this.loggedInUser,
        action: 'delete',
        moment: new Date().toLocaleString(),
        name: name
      }])
      localStorage.setItem('history', JSON.stringify(this.history))
    },
    todoItemChange(item) {
      this.$store.commit('SET_TODO_ITEM', this.items);
      this.$store.commit('SET_HISTORY_ROW', [{
        user: this.loggedInUser,
        action: item.checked ? 'completed' : 'moved back in todo',
        moment: new Date().toLocaleString(),
        name: item.name
      }])
      localStorage.setItem('history', JSON.stringify(this.history))
    },
  },
  created() {
    const user = localStorage.getItem('logged_in');
    //
    this.$store.commit('SET_LOGIN_USER', user);
    this.$store.commit('SET_TODO_ITEM', JSON.parse(localStorage.getItem(user)).todos);
    this.$store.commit('SET_HISTORY_ROW', JSON.parse(localStorage.getItem('history')))
  }
}
</script>

<style lang="scss">
.task-action-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .task-badge {
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
}
</style>
