<template></template>
<script>
import store from 'store'

function controlGame (event) {
  if (store.state.playground.paused) {
    return
  }
  event = event || window.event
  const charCode = (typeof event.which === 'number') ? event.which : event.keyCode
  switch (charCode) {
    case 38: // arrow up
      store.dispatch('rotate', {player: 0})
      break
    case 40: // arrow down
      store.dispatch('moveDown', {player: 0})
      break
    case 37: // arrow left
      store.dispatch('moveLeft', {player: 0})
      break
    case 39: // arrow right
      store.dispatch('moveRight', {player: 0})
      break
    case 87: // W
      store.dispatch('rotate', {player: 1})
      break
    case 83: // S
      store.dispatch('moveDown', {player: 1})
      break
    case 65: // A
      store.dispatch('moveLeft', {player: 1})
      break
    case 68: // D
      store.dispatch('moveRight', {player: 1})
      break
  }
}

export default {
  name: 'controls',
  created () {
    document.onkeydown = controlGame
  },
  destroyed () {
    document.removeEventListener('onkeydown', controlGame)
  }
}
</script>
