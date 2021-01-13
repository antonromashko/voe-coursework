import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosItems:  {},
    loggedInUser: false
  },
  mutations: {
    SET_TODO_ITEM (state, payload) {
      state.todosItems = { ...state.todosItems, ...payload};
      let userData = JSON.parse(localStorage.getItem(state.loggedInUser));
      userData['todos'] = state.todosItems
      localStorage.setItem(state.loggedInUser, JSON.stringify(userData))
    },
    REMOVE_FROM_TODO_ITEM (state, payload) {
      let tempItems = state.todosItems;
      delete tempItems[payload];
      state.todosItems = { ...tempItems };
      let userData = JSON.parse(localStorage.getItem(state.loggedInUser));
      userData['todos'] = state.todosItems
      localStorage.setItem(state.loggedInUser, JSON.stringify(userData))
    },
    SET_LOGIN_USER (state, payload) {
      state.loggedInUser = payload;
      localStorage.setItem('logged_in', payload);
    },
    SET_LOGOUT_USER (state) {
      state.loggedInUser = false;
    }
  },
  getters: {

  }
})