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
    <v-spacer></v-spacer>
    <v-text-field
        v-model="searchValue"
        label="search"
    ></v-text-field>
<!--    <FormInput-->
<!--      v-model="searchValue"-->
<!--      name="search"-->
<!--      label="One row"-->
<!--      type="text"-->
<!--      :counter="false"-->
<!--    />-->
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn color="error" @click="logoutUser">Logout</v-btn>
  </v-toolbar>
</template>

<script>
// import FormInput from "@/components/auth/FormInput.vue";
import AddTask from "@/components/todo/AddTask.vue";
import { ROUTER } from "@/const";

export default {
  name: "ToolBar",
  components: {
    // FormInput,
    AddTask
  },
  data() {
    return {
      activeTab: 0,
      searchValue: '',
    }
  },
  watch: {
    activeTab() {
      this.$emit('changeTab', this.activeTab);
    },
    searchValue() {
      this.$emit('search', this.searchValue);
    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem('logged_in');
      this.$store.commit('SET_LOGOUT_USER');
      this.$router.push(ROUTER.AUTH)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-text-field__details {
    height: 0;
    min-height: 0;
    width: 200px;
  }
}
</style>