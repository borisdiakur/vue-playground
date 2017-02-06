// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App'
import Home from './components/home/Home'
import Playground from './components/playground/Playground'
import Highscore from './components/highscore/Highscore'

const routes = [
  { path: '/', component: Home },
  { path: '/playground', component: Playground },
  { path: '/highscore', component: Highscore }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
