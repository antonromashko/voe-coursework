import Vue from 'vue'
import VueRouter from 'vue-router'
import P404 from "@/views/P404.vue";
import AuthView from "@/views/AuthView.vue";
import TodoView from "@/views/TodoView.vue";
import History from "@/components/history/History.vue"
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: 'vue-project/',
    name: 'Home',
    redirect: 'vue-project/todos'
  },
  {
    path: 'vue-project/registration',
    name: 'Registration',
    components: {
      Content: AuthView
    },
    meta: { requiresLogin: false }
  },
  {
    path: 'vue-project/auth',
    name: 'Auth',
    components: {
      Content: AuthView
    }
  },
  {
    path: 'vue-project/todos',
    name: 'Todos',
    components: {
      Content: TodoView
    },
    meta: { requiresLogin: true }
  },
  {
    path: 'vue-project/todos-completed',
    name: 'TodosCompleted',
    components: {
      Content: TodoView
    },
    meta: { requiresLogin: true }
  },
  {
    path: 'vue-project/history',
    name: 'History',
    components: {
      Content: History
    },
    meta: { requiresLogin: false }
  },
  {
    path: '*',
    components:{
      Content: P404
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isLogged = !!localStorage.getItem('logged_in') || !!store.state.loggedInUser
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!isLogged) {
      next("/auth")
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
