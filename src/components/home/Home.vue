<template>
  <div class="home">
    <h1>Welcome to our Awesome Multiplayer Tetris Game</h1>
    <ul>
      <li><router-link id="link-play" to="/play">New Game</router-link></li>
      <li><router-link id="link-highscore" to="/highscore">Highscore</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
