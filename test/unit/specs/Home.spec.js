import Vue from 'vue'
import Home from 'src/components/home/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Home)
    })
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Welcome to our Awesome Multiplayer Tetris Game')
  })
})
