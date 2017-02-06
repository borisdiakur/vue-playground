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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
