import Vue from 'vue'
import VueKakaoSdk from 'vue-kakao-sdk'

const apiKey = '8a41e881d3df61cc4a88ccd0d3cce645'
Vue.use(VueKakaoSdk, { apiKey })

// const VueKakao = {
//   install(Vue, options) {
//     // eslint-disable-next-line no-undef
//     if (!Kakao || !Kakao.isInitialized()) {
//       // eslint-disable-next-line no-undef
//       Kakao.init('fe81c121959db2b78993cbf9d738794d')
//       Vue.use('VueKakao')
//       // eslint-disable-next-line no-undef
//       Vue.prototype.$kakao = Kakao
//     }
//   },
// }
//
// export default VueKakao
