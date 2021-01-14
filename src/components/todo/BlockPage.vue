<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(item, key) in filteredTodoItems" :key="key" :cols="6">
        <v-card>
          <v-img :src="item.image" class="white--text align-end" height="200px"></v-img>
          <v-card-actions>
            <todo-item
              :name="item.name"
              :key="key"
              :edited="item.edited"
              :completed="item.checked"
              :description="item.description"
              :more-buttons="item.moreButtons"
            >
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
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import TodoItem from "@/components/todo/TodoItem";
import AddTask from "@/components/todo/AddTask";
import MoreButtons from "@/components/todo/MoreButtons";
import {mdiDotsHorizontal} from "@mdi/js";
import {mapGetters} from "vuex";

export default {
  name: "BlockPage",
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
    })
  }
}
</script>

<style scoped>

</style>