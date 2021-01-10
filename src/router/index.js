import Vue from 'vue'
import VueRouter from 'vue-router'
import P404 from "@/views/P404.vue";
import AuthView from "@/views/AuthView.vue";
import TodoView from "@/views/TodoView.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/auth'
  },
  {
    path: '/registration',
    name: 'Registration',
    components: {
      Content: AuthView
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    components: {
      Content: AuthView
    }
  },
  {
    path: '/todos',
    name: 'Todos',
    components: {
      Content: TodoView
    }
  },
  {
    path: '/todos-completed',
    name: 'TodosCompleted',
    components: {
      Content: TodoView
    }
  },
  {
    path: '*',
    component: P404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
