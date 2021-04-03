const state = () => ({
  weather: {
  },
  weatherIcon: '',
})

const getters = {
  getWeather: (state) => {
    return state.weather
  },
  getWeatherIcon: (state) => {
    return state.weatherIcon
  },
}

const mutations = {
  commitWeather: (state, object) => {
    state.weather = object
  },
  commitWeatherIcon: (state, object) => {
    state.weatherIcon = object
  },
}

const actions = {
  async dispatchWeather({ commit }, params) {
    let lat = this.$cookies.get('CANET_LAT') || 37.361181
    let lon = this.$cookies.get('CANET_LON') || 126.969508
    const result = await this.$axios.get(`${process.env.WEATHER_API}?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`)
    console.log('dispatchWeather result', result)
    commit('commitWeather', result)
    const icon = (result && result.weather && result.weather[0].icon) || ''
    commit('commitWeatherIcon', icon)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
