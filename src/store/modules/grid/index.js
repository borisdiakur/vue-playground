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

function markCells (tetrimino, grid) {
  const matrix = tetrimino.matrix
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (cell === 1 && grid.rows[tetrimino.coordinates.y + i]) {
        const gridCell = {}
        gridCell[`tetrimino${tetrimino.type}`] = true
        grid.rows[tetrimino.coordinates.y + i].splice(tetrimino.coordinates.x + j, 1, gridCell)
      }
    }
  }
}

function unmarkCells (tetrimino, grid) {
  const matrix = tetrimino.matrix
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (cell === 1 && grid.rows[tetrimino.coordinates.y + i]) {
        grid.rows[tetrimino.coordinates.y + i].splice(tetrimino.coordinates.x + j, 1, {})
      }
    }
  }
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
          const gridRowBelow = grid.rows[tetrimino.coordinates.y + i + 1]
          if (!gridRowBelow || Object.keys(gridRowBelow[tetrimino.coordinates.x + j]).length) {
            return true
          }
        }
      }
    }
  }
  return false
}

function hasTouchedSide (tetrimino, grid, side) {
  if (side !== 'left' && side !== 'right') {
    throw new Error('missing valid parameter side')
  }
  const matrix = tetrimino.matrix
  const s = side === 'left' ? -1 : 1
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      const cellOnSide = row[j + s]
      if (cell === 1 && cellOnSide !== 1) {
        const cellOnSideOnGrid = grid.rows[tetrimino.coordinates.y + i][tetrimino.coordinates.x + j + s]
        if (!cellOnSideOnGrid || Object.keys(cellOnSideOnGrid).length) {
          return true
        }
      }
    }
  }
  return false
}

function isRotatable (tetrimino, grid) {
  // Algorithm: Copy tetrimino, copy grid and unmark tetrimino on copied grid,
  // try to perform rotation, “kick wall” if necessary, rotate, check if it would collide.
  const tetriminoCopy = new Tetrimino(tetrimino.type, JSON.parse(JSON.stringify(tetrimino.coordinates)))
  tetriminoCopy.rotationIndex = tetrimino.rotationIndex
  const gridCopy = {rows: JSON.parse(JSON.stringify(grid.rows))}
  unmarkCells(tetriminoCopy, gridCopy)
  let matrix = tetriminoCopy.matrix
  if (tetriminoCopy.coordinates.x < 0) {
    // kick left wall
    tetriminoCopy.coordinates.x = 0
  } else if (tetriminoCopy.coordinates.x + matrix.length >= GRID_WIDTH) {
    // kick right wall
    tetriminoCopy.coordinates.x = GRID_WIDTH - matrix.length
  }
  tetriminoCopy.rotate()
  matrix = tetriminoCopy.matrix
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (cell === 1) {
        // check on grid
        const gridRow = gridCopy.rows[tetriminoCopy.coordinates.y + i]
        if (!gridRow) {
          return false
        }
        const gridCell = gridRow[tetriminoCopy.coordinates.x + j]
        if (!gridCell || Object.keys(gridCell).length) {
          return false
        }
      }
    }
  }
  return true
}

// actions
const actions = {
  step ({state, commit, rootState}) {
    // deactivate all active tetriminos, which cannot be moved down
    for (let i = tetriminos.length; i--;) {
      const tetrimino = tetriminos[i]
      if (hasTouchedDown(tetrimino, state)) {
        // deactivate tetrimino
        tetriminos.splice(i, 1)
      }
    }

    // if there is no active tetrimino, create one (assign it to a player) and update fields on the grid
    if (!tetriminos.length) {
      const tetrimino = new Tetrimino(rootState.playground.next, {x: Math.floor(GRID_WIDTH / 2), y: 0})
      tetriminos.push(tetrimino)
      markCells(tetrimino, state)
    } else {
      // if there is an active tetrimino, move it one cell down and update fields on the grid
      for (const tetrimino of tetriminos) {
        unmarkCells(tetrimino, state)
        tetrimino.moveDown()
        markCells(tetrimino, state)
      }
    }

    // clear completed rows, TODO: add points to score
    for (const tetrimino of tetriminos) {
      unmarkCells(tetrimino, state)
    }
    for (let i = 0; i < GRID_HEIGHT; i++) {
      const row = state.rows[i]
      let isCompleted = true
      for (let j = GRID_WIDTH; j--;) {
        const cell = row[j]
        if (!Object.keys(cell).length) {
          isCompleted = false
          break
        }
      }
      if (isCompleted) {
        state.rows.splice(i, 1)
        const row = []
        for (let j = GRID_WIDTH; j--;) {
          row.push({}) // cell
        }
        state.rows.splice(0, 0, row)
      }
    }
    for (const tetrimino of tetriminos) {
      markCells(tetrimino, state)
    }
  },
  moveDown ({state}) {
    for (const tetrimino of tetriminos) {
      if (!hasTouchedDown(tetrimino, state)) {
        unmarkCells(tetrimino, state)
        tetrimino.moveDown()
        markCells(tetrimino, state)
      }
    }
  },
  rotate ({state}) {
    for (const tetrimino of tetriminos) {
      if (isRotatable(tetrimino, state)) {
        unmarkCells(tetrimino, state)
        if (tetrimino.coordinates.x < 0) {
          // kick left wall
          tetrimino.coordinates.x = 0
        } else if (tetrimino.coordinates.x + tetrimino.matrix.length >= GRID_WIDTH) {
          // kick right wall
          tetrimino.coordinates.x = GRID_WIDTH - tetrimino.matrix.length
        }
        tetrimino.rotate()
        markCells(tetrimino, state)
      }
    }
  },
  moveLeft ({state}) {
    for (const tetrimino of tetriminos) {
      if (!hasTouchedSide(tetrimino, state, 'left')) {
        unmarkCells(tetrimino, state)
        tetrimino.coordinates.x = tetrimino.coordinates.x - 1
        markCells(tetrimino, state)
      }
    }
  },
  moveRight ({state, commit, rootState}) {
    for (const tetrimino of tetriminos) {
      if (!hasTouchedSide(tetrimino, state, 'right')) {
        unmarkCells(tetrimino, state)
        tetrimino.coordinates.x = tetrimino.coordinates.x + 1
        markCells(tetrimino, state)
      }
    }
  }
}

export default {
  state,
  getters,
  actions
}
