import Home from './../components/home/Home'
import Playground from './../components/playground/Playground'
import Highscore from './../components/highscore/Highscore'

const routes = [
  { path: '/', component: Home },
  { path: '/play', component: Playground },
  { path: '/highscore', component: Highscore }
]

export default routes
