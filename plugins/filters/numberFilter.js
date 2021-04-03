import Vue from 'vue'

export default ({ app, store, route }) => {
  Vue.filter('currency', (value) => {
    let locale
    let maximumFractionDigits = 0
    let currencyCode = 'KRW'
    let currencyUnit = '원'
    let currencyText = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode.toUpperCase(),
      maximumFractionDigits,
    }).format(value)
    let priceIndex = currencyText.search(/\d/)
    return `${currencyText.slice(priceIndex, currencyText.length)} ${currencyUnit}`
  })
  Vue.filter('digits', (value) => {
    value += ''
    // 숫자를 세 자리 마다 쉼표를 넣은 문자로 변환한다 (1000 -> '1,000')
    value.split('.')
    return value.split('').reverse().reduce((acc, digit, i) => {
      if (i > 0 && i % 3 === 0) {
        acc.push(',')
      }
      return [
        ...acc,
        digit,
      ]
    }, []).reverse().join('')
  })
  Vue.filter('tel', (num) => {
    return num.replace(/[^0-9]/g, '')
  })
  Vue.filter('telDash', (num) => {
    console.log(num)
    num = num.replace(/[^0-9]/g, '')
    // console.log(v)
    if (num.length < 4) {
      return num
    } else if (num.length < 7) {
      return `${num.substr(0, 3)}-${num.substr(3, 3)}`
    } else if (num.length < 11) {
      return `${num.substr(0, 3)}-${num.substr(3, 3)}-${num.substr(6, 4)}`
    } else {
      return `${num.substr(0, 3)}-${num.substr(3, 4)}-${num.substr(7, 4)}`
    }
  })
  Vue.filter('mmss', (value) => {
    let mm = Math.floor(value / 60)
    let ss = Math.floor(value % 60)
    if (mm < 10) {
      mm = `0${mm}`
    }
    if (ss < 10) {
      ss = `0${ss}`
    }
    return `${mm}:${ss}`
  })
}
