import Vue from 'vue'
import VueRouter from 'vue-router'
import P404 from "@/views/P404.vue";
import AuthView from "@/views/AuthView.vue";
import TodoView from "@/views/TodoView.vue";
import store from '@/store';

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
    },
    meta: { requiresLogin: false }
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
    },
    meta: { requiresLogin: true }
  },
  {
    path: '/todos-completed',
    name: 'TodosCompleted',
    components: {
      Content: TodoView
    },
    meta: { requiresLogin: true }
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

router.beforeEach((to, from, next) => {
    let isLogged = !!localStorage.getItem('logged_in') || !!store.state.loggedInUser
    if (['/auth', '/registration'].includes(to.fullPath) || (to.matched.some(item => item.meta.requiresLogin) && isLogged )) {
       return next()
    } else next("/auth")
})

export default router
