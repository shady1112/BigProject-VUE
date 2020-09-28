import axios from 'axios'
// create an axios instance

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent


    return config
  },
  error => {
    window.console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
    config => {
        // do something before request is sent


        return config
    },
    error => {
        window.console.log(error) // for debug
        return Promise.reject(error)
    }
)
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  export default service