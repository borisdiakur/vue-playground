<template>
  <div class="info">
    <next></next>
  </div>
</template>

<script>
import Next from './next/Next'
import Hints from './hints/Hints'
import Display from './display/Display'

export default {
  name: 'info',
  components: {
    Next,
    Hints,
    Display
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .info {
    display: inline-block;
    vertical-align: top;
    padding-left: 20px;
  }
</style>
