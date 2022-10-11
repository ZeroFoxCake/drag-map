import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  }]
})

export default router