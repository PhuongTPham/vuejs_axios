import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import About from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/users',
      name: 'Users',
      component: About
    }
  ]
})
