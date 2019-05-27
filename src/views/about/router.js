import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import test from './test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
