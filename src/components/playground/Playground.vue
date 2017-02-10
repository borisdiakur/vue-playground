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
import store from 'store'
import * as types from 'store/mutation-types'

function step () {
  if (store.state.playground.paused) {
    return
  }
  store.dispatch('step')
  setTimeout(step, store.state.playground.speed)
}

export default {
  name: 'playground',
  components: {
    Grid,
    Info,
    Controls
  },
  created () {
    this.$store.commit(types.RESUME)
    step()
  },
  destroyed () {
    this.$store.commit(types.PAUSE)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
