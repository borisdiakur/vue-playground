import * as types from '../../mutation-types'
import Tetrimino from './tetrimino'

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

// private references
const tetriminos = []

// getters
const getters = {
  grid: state => state.grid
}

function hasTouchedDown (tetrimino, grid) {
  // Algorithm: Iterate over the cells of the tetrimino matrix.
  // If there’s a 1, check if there is a 1 one row below in the tetrimino; if yes, continue;
  // else check if there is a 1 one row below in the grid; if yes, return true.
  // If checked all fields, return false
  const matrix = tetrimino.matrix
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    const rowBelow = matrix[i + 1]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (cell === 1) {
        if (!rowBelow || rowBelow[j] !== 1) {
          // check on grid
          if (state.grid[tetrimino.coordinates.y + i + 1][tetrimino.coordinates.x + j]) {
            return true
          }
        }
      }
    }
    return false
  }
}

function markCells (tetrimino, grid) {
  // TODO: implement markCells
}

function unmarkCells (tetrimino, grid) {
  // TODO: implement unmarkCells
}

// mutations
let tmp = true
const mutations = {
  [types.STEP] (state) {
    // manipulate grid
    // TODO deactivate all active tetriminos, which cannot be moved down
    const actives = tetriminos.filter(t => t.active)
    for (const tetrimino of actives) {
      if (hasTouchedDown(tetrimino, state.grid)) {
        // deactivate tetrimino
        tetrimino.active = false
      }
    }

    // TODO if there is no active tetrimino, create one (assign it to a player) and update fields on the grid
    if (!actives.length) {
      const active = new Tetrimino(state.playground.next, {x: Math.floor(GRID_WIDTH / 2), y: 0})
    }

    // TODO if there is an active tetrimino, move it one cell down and update fields on the grid
    // TODO clear completed rows from bottom to top; move all inactive tetriminos above cleared row down; add points to score; repeat;

    state.rows[3].splice(5, 1, { tetriminoI: tmp })
    tmp = !tmp
  }
}

export default {
  state,
  getters,
  mutations
}
