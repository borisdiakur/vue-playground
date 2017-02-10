import * as types from '../../mutation-types'
import Tetrimino from '../grid/tetrimino'

// initial state
const INITIAL_GAME_SPEED = 1000 // 1 step per 1s
const state = {
  paused: true,
  speed: INITIAL_GAME_SPEED,
  next: Tetrimino.getRandomType()
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
  }
}

// actions
const actions = {
  setNext ({state}) {
    state.next = Tetrimino.getRandomType()
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
