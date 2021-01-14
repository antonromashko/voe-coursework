<template>
  <div>
    <div id="nav">
          |
          <router-link to="/auth">Sign in</router-link>
          |
          <router-link to="/registration">Sign up</router-link>
          |
          <router-link to="/history">History</router-link>
          |
    </div>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            User
          </th>
          <th class="text-left">
            Action
          </th>
          <th class="text-left">
            Task name
          </th>
          <th class="text-left">
            Moment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in history"
          :key="idx"
        >
          <td>{{ item.user }}</td>
          <td>{{ item.action }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.moment }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "History",
  computed: {
    ...mapState({
      history: state => state.historyData
    })
  },
  mounted() {
    this.$store.commit('SET_HISTORY_ROW', JSON.parse(localStorage.getItem('history')))
  }
}
</script>

<style scoped>

</style>