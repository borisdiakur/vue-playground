import * as types from '../../mutation-types'
import Tetrimino from '../grid/tetrimino'

// initial state
const INITIAL_GAME_SPEED = 1000 // 1 step per 1s
const state = {
  level: 1,
  score: 0,
  paused: true,
  speed: INITIAL_GAME_SPEED,
  next: Tetrimino.getRandomType()
}

// getters
const getters = {
  paused: state => state.paused,
  speed: state => state.speed,
  time: state => state.time,
  score: state => state.score,
  level: state => state.level,
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
  [types.SCORE] (state, points) {
    state.score += points
    // level-up each 10000 points
    state.level = 1 + Math.floor(state.score / 10000)
    // speed-up each level by 200ms
    state.speed -= 200
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
