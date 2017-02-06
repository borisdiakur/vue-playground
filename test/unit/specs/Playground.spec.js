require('babel-polyfill')
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Playground from 'src/components/playground/Playground'

const store = new Vuex.Store({
  state: {
    grid: { rows: [[{}, {}], [{}, {}]] }
  }
})

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      el: document.createElement('div'),
      render: (h) => h(Playground)
    })
    expect(vm.$el.querySelector('.playground h1').textContent)
      .to.equal('Playground')
  })
})
