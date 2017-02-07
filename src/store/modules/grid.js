import * as types from '../mutation-types'

// initialize empty grid (initial state)
const GRID_HEIGHT = 20
const GRID_WIDTH = 10
const rows = []
for (let i = GRID_HEIGHT; i--;) {
  const row = []
  for (let j = GRID_WIDTH; j--;) {
    row.push({}) // cell
  }
  rows.push(row)
}
const state = {
  rows
}

// getters
const getters = {
  grid: state => state.grid
}

// mutations
const mutations = {
  [types.STEP] (state) {
    // TODO manipulate grid somehow...
    state.grid = [[]]
  }
}

export default {
  state,
  getters,
  mutations
}
