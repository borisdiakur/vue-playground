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

export default grid
