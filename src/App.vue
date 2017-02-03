<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home'
import Playground from './components/Playground'
import Highscore from './components/Highscore'

export default {
  name: 'app',
  components: {
    Home,
    Playground,
    Highscore
  }
}
</script>

<style>
#app {
}
</style>
