<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/home/Home'
import Playground from './components/playground/Playground'
import Highscore from './components/highscore/Highscore'

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
