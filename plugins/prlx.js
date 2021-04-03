import Vue from 'vue'

// As a plugin
// import VuePrlx from 'vue-prlx'

// As a directive (local)
import { VuePrlxDirective } from 'vue-prlx'

// Vue.use(VuePrlx)

Vue.directive('prlx', VuePrlxDirective)
