export default function({ $axios, store, redirect, app, route, error }) {
  $axios.defaults.timeout = 10000
  $axios.defaults.headers.post['Content-Type'] = 'application/json'

  $axios.onError((e) => {
    console.log('Axios 에러났음!')
    return Promise.reject(e)
  })

  $axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config
  }, function(e) {
    // Do something with request error
    return Promise.reject(e)
  })

  // Add a response interceptor
  $axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('axios response', response)
    return (response && response.data) || response
  }, function(e) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(e)
  })
}
