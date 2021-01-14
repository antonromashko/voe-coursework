<template>
  <v-toolbar color="blue-grey" dark>
    <AddTask>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </AddTask>
    <v-tabs v-model="activeTab">
      <v-tab>To Do</v-tab>
      <v-tab>Completed</v-tab>
    </v-tabs>
    <v-text-field v-model="searchValue" label="search" :style="adaptSearch"></v-text-field>
    <v-btn icon @click="isRowPage = !isRowPage">
      <v-icon>
        {{ isRowPage ? mdiApps : 'mdi-format-list-bulleted-square' }}
      </v-icon>
    </v-btn>
    <v-btn class="active" icon to="/history" title="history"><v-icon>mdi-domain</v-icon></v-btn>
    <v-btn icon color="error" title="logout" @click="logoutUser"><v-icon>{{ logoutIcon }}</v-icon></v-btn>
  </v-toolbar>
</template>

<script>
import AddTask from "@/components/todo/AddTask.vue";
import { ROUTER } from "@/const";
import { mdiAccountArrowLeftOutline, mdiApps } from '@mdi/js';

export default {
  name: "ToolBar",
  components: {
    AddTask
  },
  data() {
    return {
      activeTab: 0,
      searchValue: '',
      logoutIcon: mdiAccountArrowLeftOutline,
      mdiApps: mdiApps,
      isRowPage: true
    }
  },
  computed: {
    adaptSearch () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return {}
          case 'sm': return {}
          case 'md': return {}
          case 'lg': return {width: '300px'}
          case 'xl': return {width: '300px'}
          default:
          throw {};
        }
      },
  },
  watch: {
    activeTab() {
      this.$store.commit('SET_ACTIVE_TAB', this.activeTab)
      if (this.activeTab === 0 && this.$route.path !== ROUTER.TODOS) {
        this.$router.push(ROUTER.TODOS)
      } else if (this.activeTab === 1 && this.$route.path !== ROUTER.TODOS_COMPLETED) {
        this.$router.push(ROUTER.TODOS_COMPLETED)
      }
    },
    searchValue() {
      this.$store.commit('SET_SEARCH_VALUE', this.searchValue)
    },
    isRowPage() {
      this.$emit('pageChange', this.isRowPage);
    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem('logged_in');
      this.$store.commit('SET_LOGOUT_USER');
      this.$router.push(ROUTER.AUTH)
    }
  },
  mounted() {
    if (this.$route.name === 'TodosCompleted') {
      this.activeTab = 1
    }
  }
}
</script>

<style lang="scss" scoped>
$adapt-search: 200px;
::v-deep {
  .v-text-field__details {
    height: 0;
    min-height: 0;
  }
}
</style>