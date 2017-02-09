<template>
  <div class="next">
    lalalal
  </div>
</template>

<template>
  <div class="grid"
       v-bind:style="{width: 22 * rows[0].length}">
    <ul>
      <li v-for="row in rows"
          class="row">
        <ul>
          <li v-for="cell in row"
              class="cell"
              v-bind:class="{
                'tetrimino-i': cell.tetriminoI,
                'tetrimino-j': cell.tetriminoJ,
                'tetrimino-l': cell.tetriminoL,
                'tetrimino-o': cell.tetriminoO,
                'tetrimino-s': cell.tetriminoS,
                'tetrimino-t': cell.tetriminoT,
                'tetrimino-z': cell.tetriminoZ
              }"></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Tetrimino from 'store/modules/grid/tetrimino'

// initialize empty grid (initial state)
const GRID_HEIGHT = 4
const GRID_WIDTH = 4
const rows = []
for (let i = GRID_HEIGHT; i--;) {
  const row = []
  for (let j = GRID_WIDTH; j--;) {
    row.push({}) // cell
  }
  rows.push(row)
}

export default {
  name: 'next',
  data () {
    return {
      next: this.$store.state.playground.next
    }
  },
  computed: {
    rows () {
      const tetrimino = new Tetrimino(this.$store.state.playground.next, {x: 0, y: 0})
      const matrix = tetrimino.matrix
      const rows = []
      for (let i = 0; i < matrix.length; i++) {
        rows.push([])
        const row = matrix[i]
        for (let j = 0; j < row.length; j++) {
          const cell = row[j]
          if (cell === 1) {
            const gridCell = {}
            gridCell[`tetrimino${tetrimino.type}`] = true
            rows[i][j] = gridCell
          } else {
            rows[i][j] = {}
          }
        }
      }
      return rows
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
