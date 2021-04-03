import Vue from 'vue'

export default ({ app, store, route }) => {
  Vue.filter('optImage', (url, size, type) => {
    const host = 'https://d2cbuo7f6l4gdl.cloudfront.net'
    const urls = url.split(`${host}/`)
    console.log('urls', urls)
    switch (size) {
      case 'sm':
        return `${host}/${type === 'square' ? '480x480' : '480x360'}/${urls[1]}`
      case 'md':
        return `${host}/${type === 'square' ? '800x800' : '800x600'}/${urls[1]}`
      case 'lg':
      default:
        return url
    }
  })
  Vue.filter('regexImage', (url) => {
    return url || `https://d2cbuo7f6l4gdl.cloudfront.net/user/default/default.png`
  })
}
