import Vue from 'vue'
import Vuex from 'vuex'
import grid from './modules/grid'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    grid,
    paused: true
  },
  mutations: {
    step (state, updatedGrid) {
      state.grid = updatedGrid
    },
    pause (state) {

    },
    resume (state) {

    }
  }
})

export default store
