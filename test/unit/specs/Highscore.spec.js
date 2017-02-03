import Vue from 'vue'
import Highscore from 'src/components/highscore/Highscore'

describe('Highscore.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Highscore)
    })
    expect(vm.$el.querySelector('.highscore h1').textContent)
      .to.equal('Highscore')
  })
})
