import * as types from '../../mutation-types'

// initial state
const INITIAL_GAME_SPEED = 1000 // 1 step per 1s
const state = {
  paused: true,
  speed: INITIAL_GAME_SPEED,
  next: 'T' // TODO: randomize periodically
}

// getters
const getters = {
  paused: state => state.paused,
  speed: state => state.speed,
  next: state => state.next
}

// mutations
const mutations = {
  [types.PAUSE] (state) {
    state.paused = true
  },
  [types.RESUME] (state) {
    state.paused = false
  },
  [types.STEP] (state) {
    // TODO count steps, accelerate gameplay periodically
  }
}

export default {
  state,
  getters,
  mutations
}
