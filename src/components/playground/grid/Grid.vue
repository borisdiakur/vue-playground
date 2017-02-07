<template>
  <div class="grid"
       v-bind:style="{width: 22 * grid.rows[0].length}">
    <ul>
      <li v-for="row in grid.rows"
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
export default {
  name: 'grid',
//  computed: {
//    grid () {
//      return this.$store.state.grid
//    }
//  },
  data () {
    return {
      grid: this.$store.state.grid
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid ul {
    list-style: none;
    padding: 0;
  }
  .grid .row {
    height: 22px;
  }
  .grid .cell {
    display: inline-block;
    font-size: 0;
    width: 20px;
    height: 20px;
    border: solid 1px #ddd;
  }
  .grid .cell.tetrimino-i {
    background-color: maroon;
  }
  .grid .cell.tetrimino-j {
    background-color: lightgray;
  }
  .grid .cell.tetrimino-l {
    background-color: purple;
  }
  .grid .cell.tetrimino-o {
    background-color: navy;
  }
  .grid .cell.tetrimino-s {
    background-color: darkgreen;
  }
  .grid .cell.tetrimino-t {
    background-color: brown;
  }
  .grid .cell.tetrimino-z {
    background-color: teal;
  }

</style>
