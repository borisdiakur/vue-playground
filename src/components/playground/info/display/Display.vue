<template>
  <div class="display">
    <ul>
      <li class="info">Level: {{level}}</li>
      <li class="info">Score: {{score}}</li>
      <li class="info">Time: {{time}} <span v-if="paused">(paused)</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'display',
  computed: {
    level () { return this.$store.state.playground.level },
    paused () { return this.$store.state.playground.paused },
    score () { return this.$store.state.playground.score },
    time () { return this.$store.state.playground.time }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
