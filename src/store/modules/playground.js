import * as types from '../mutation-types'

// initial state
const state = {
  paused: true
}

// getters
const getters = {
  paused: state => state.paused
}

// mutations
const mutations = {
  [types.PAUSE] (state) {
    state.paused = true
  },
  [types.RESUME] (state) {
    state.paused = false
  }
}

export default {
  state,
  getters,
  mutations
}
