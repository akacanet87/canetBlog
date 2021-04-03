import Vue from 'vue'

export default ({ app, store, route }) => {
  Vue.filter('htmlText', (text) => {
    return text && text.replace(/(?:\r\n|\r|\n)/g, '<br />')
  })
  Vue.filter('englishOnly', (text) => {
    return text && text.replace(/[^a-zA-Z]/g, '')
  })
}
