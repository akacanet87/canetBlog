import Vue from 'vue'

export default ({ app, store, route }) => {
  Vue.filter('weather', (icon) => {
    const dn = (icon && icon.replace(/[^a-d]/g, '')) || (app.$dayjs().hour() >= 18 || app.$dayjs().hour() <= 8 ? 'n' : 'd')
    const weatherNum = (icon && icon.replace(/[^0-9]/g, '')) || 1
    let weather
    switch (weatherNum) {
      case 1:
        weather = 'f' // 'fine'
        break
      case 2:
      case 3:
      case 4:
        weather = 'c' // 'cloud'
        break
      case 9:
      case 10:
        weather = 'r' // 'rain'
        break
      case 11:
        weather = 't' // 'thunder'
        break
      case 13:
        weather = 's' // 'snow'
        break
      case 50:
        weather = 'h' // 'horror'
        break
      default:
        weather = 'f'
        break
    }
    return weather + dn
  })
}
