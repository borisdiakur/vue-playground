<template>
  <div class="playground">
    <h1>Playground</h1>
    <grid></grid>
    <info></info>
    <controls></controls>
  </div>
</template>

<script>
import Grid from './grid/Grid'
import Info from './info/Info'
import Controls from './controls/Controls'
import * as types from 'store/mutation-types'

let interval = null

export default {
  name: 'playground',
  components: {
    Grid,
    Info,
    Controls
  },
  created () {
    // resume game
    setTimeout(() => this.$store.commit(types.RESUME), 0)
  },
  destroyed () {
    // TODO: pause game
    // TODO: display confirmation alert if game is still running
    window.alert('bam')
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
