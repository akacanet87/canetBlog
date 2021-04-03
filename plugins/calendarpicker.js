import Vue from 'vue'
// import VueDatepickerLocal from 'vue-datepicker-local'
import VueJsDatePicker from 'vuejs-datepicker'

const VueDatePicker = {
  install(Vue, options) {
    // Vue.component('DatePicker', VueDatepickerLocal)
    Vue.component('DatePicker', VueJsDatePicker)
  },
}

Vue.use(VueDatePicker)
export default VueDatePicker
