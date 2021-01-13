import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosItems:  {}
  },
  mutations: {
    SET_TODO_ITEM (state, payload) {
      state.todosItems = { ...state.todosItems, ...payload}
    },
    REMOVE_FROM_TODO_ITEM (state, payload) {
      let tempItems = state.todosItems;
      delete tempItems[payload];
      state.todosItems = { ...tempItems };
    }
  },
  getters: {

  }
})