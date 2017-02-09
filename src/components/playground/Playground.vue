<template>
  <div class="playground">
    <h1>Playground</h1>
    <grid></grid>
    <info></info>
  </div>
</template>

<script>
import Grid from './grid/Grid'
import Info from './info/Info'
import * as types from '../../store/mutation-types'

let interval = null

export default {
  name: 'playground',
  components: {
    Grid,
    Info
  },
  created () {
    // resume game
    setTimeout(() => this.$store.commit(types.RESUME), 2000)
  },
  computed: {
    paused () {
      return this.$store.state.playground.paused
    }
  },
  watch: {
    // watch playground paused property
    paused: function (isPaused) {
      // if resumed, init new inverval, else clear intervall
      if (isPaused) {
        window.clearInterval(interval)
        interval = null
      } else if (interval === null) { // don’t create interval if it already exists
        interval = window.setInterval(() => {
          this.$store.dispatch('step')
        }, this.$store.state.playground.speed)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
