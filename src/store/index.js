import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import playground from './modules/playground'
import grid from './modules/grid'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    playground,
    grid
  }
})

export default store
