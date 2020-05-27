import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Users from './components/Users'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter);
Vue.config.productionTip = false
 const routers = [
   {path: '/users', component: Users},
   {path: '/', component: HelloWorld},
 ];
 const router = new VueRouter({
   routers
 })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
