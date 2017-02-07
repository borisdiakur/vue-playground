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

export default {
  name: 'playground',
  components: {
    Grid,
    Info
  },
  created () {
    // resume game
    this.$store.commit('RESUME')
  },
  computed: {
    paused () {
      return this.$store.state.playground.paused
    }
  },
  watch: {
    // watch playground paused property
    paused: function (changed) {
      console.log('paused changed', changed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
