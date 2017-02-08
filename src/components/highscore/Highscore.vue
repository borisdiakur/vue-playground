<template>
  <div class="highscore">
    <h1>Highscore</h1>
    <p>{{data}}</p>
    <table id="hs-list">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.score }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'highscore',
  data () {
    return {
      items: [
          { name: 'Charles', score: '9999' },
          { name: 'Jean', score: '8888' },
          { name: 'Iceman', score: '7777' },
          { name: 'Storm', score: '6666' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
