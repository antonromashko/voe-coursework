<template>
<v-list two-line>
        <v-list active-class="blue-grey lighten-5">
          <template v-for="(item, key, index) in filteredTodoItems">
            <todo-item
                :name="item.name"
                :key="key"
                :edited="item.edited"
                :completed="item.checked"
                :description="item.description"
                :more-buttons="item.moreButtons"
            >
              <template #avatar>
                <v-list-item-avatar>
                  <v-img :src="item.image"></v-img>
                </v-list-item-avatar>
              </template>
              <template #action>
                <v-list-item-action>
                  <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                  <div class="task-action-box">
                    <span class="task-badge" :class="item.taskColor"></span>
                    <v-checkbox v-model="item.checked" color="secondary" @change="$emit('todoItemChange', item)"></v-checkbox>
                  </div>
                </v-list-item-action>
                <v-btn class="ml-4" icon @click="$emit('showMore', key)">
                  <v-icon>{{ mdiDotsHorizontal }}</v-icon>
                </v-btn>
              </template>
              <template #add-task>
                <AddTask v-if="item.moreButtons" :itemKey="key">
                  <template #activator="{ on, attrs }">
                    <more-buttons
                        :action="on"
                        :attrs="attrs"
                        :more-buttons="item.moreButtons"
                        @deleteItem="$emit('deleteItem', key)"
                    ></more-buttons>
                </template>
              </AddTask>
              </template>
            </todo-item>
            <v-divider
                v-if="index < filteredTodoItems.length - 1"
                :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-list>
</template>

<script>
import { mdiDotsHorizontal } from "@mdi/js";
import TodoItem from "@/components/todo/TodoItem.vue";
import AddTask from "@/components/todo/AddTask.vue";
import MoreButtons from "@/components/todo/MoreButtons.vue";
import { mapGetters } from 'vuex';

export default {
  name: "RowPage",
  components: {
    TodoItem,
    AddTask,
    MoreButtons
  },
  data() {
    return {
      mdiDotsHorizontal: mdiDotsHorizontal
    }
  },
  computed: {
    ...mapGetters({
      filteredTodoItems: 'GET_FILTERED_TODO_ITEMS'
    }),
  }
}
</script>

<style scoped>

</style>