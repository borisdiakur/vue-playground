// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)

import App from './App'
import Home from './components/home/Home'
import Playground from './components/playground/Playground'
import Highscore from './components/highscore/Highscore'

const routes = [
  { path: '/', component: Home },
  { path: '/play', component: Playground },
  { path: '/highscore', component: Highscore }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const GRID_HEIGHT = 20
const GRID_WIDTH = 10

// initialize empty grid
const rows = []
for (let i = GRID_HEIGHT; i--;) {
  const row = []
  for (let j = GRID_WIDTH; j--;) {
    row.push({}) // cell
  }
  rows.push(row)
}
const grid = {
  rows
}

const store = new Vuex.Store({
  state: {
    grid
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
