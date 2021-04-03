export const strict = false

export const actions = {
  nuxtServerInit({ commit, dispatch, state }, { req }) {
    console.log('nuxtServerInit!!!!!!!!')
    try {
      dispatch('weather/dispatchWeather')
    } catch (e) {
      console.log('dispatchWeather error')
    }
  },
}

export default {
  actions,
}
