import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosItems:  {},
    loggedInUser: false,
    activeTab: 0,
    historyData: [],
    searchValue: ''
  },
  mutations: {
    SET_TODO_ITEM (state, payload) {
      state.todosItems = { ...state.todosItems, ...payload};
      let userData = JSON.parse(localStorage.getItem(state.loggedInUser));
      userData['todos'] = state.todosItems;
      localStorage.setItem(state.loggedInUser, JSON.stringify(userData));
    },
    RESET_TODOS_ITEMS(state) {
      state.todosItems = {};
    },
    REMOVE_FROM_TODO_ITEM (state, payload) {
      let tempItems = state.todosItems;
      delete tempItems[payload];
      state.todosItems = { ...tempItems };
      let userData = JSON.parse(localStorage.getItem(state.loggedInUser));
      userData['todos'] = state.todosItems;
      localStorage.setItem(state.loggedInUser, JSON.stringify(userData));
    },
    SET_LOGIN_USER (state, payload) {
      state.loggedInUser = payload;
      localStorage.setItem('logged_in', payload);
    },
    SET_LOGOUT_USER (state) {
      state.loggedInUser = false;
    },
    SET_ACTIVE_TAB (state, payload) {
      state.activeTab = payload;
    },
    SET_HISTORY_ROW (state, payload) {
      if (payload instanceof Object) {
        state.historyData = [ ...state.historyData, ...payload ];
      }
    },
    SET_SEARCH_VALUE(state, payload) {
      state.searchValue = payload;
    }
  },
  getters: {
    GET_FILTERED_TODO_ITEMS (state) {
      if (Object.keys(state.todosItems).length > 0) {
        return Object.fromEntries(Object.entries(state.todosItems).filter(item => {
          if(item[1].name.toString().indexOf(state.searchValue) >= 0 || item[1].description.toString().indexOf(state.searchValue) >= 0) {
            return state.activeTab === 1 ? item[1].checked === true : item[1].checked === false;
          }
        }))
      }
    }
  }
})