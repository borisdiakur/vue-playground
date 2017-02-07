require('babel-polyfill')
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from 'src/components/home/Home'

const router = new VueRouter({
  mode: 'history'
})

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      router,
      el: document.createElement('div'),
      render: (h) => h(Home)
    })
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Welcome to our Awesome Multiplayer Tetris Game')
  })
})
