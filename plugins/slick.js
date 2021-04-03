import Vue from 'vue'
import Slick from 'vue-slick'

const VueSlick = {
  install(Vue, options) {
    Vue.component('VueSlick', Slick)
  },
}

Vue.use(VueSlick)
export default VueSlick
