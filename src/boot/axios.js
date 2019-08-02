// import something here
import axios from 'axios'
// "async" is optional
export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
  axios.defaults.baseURL = 'http://localhost:3000'
}
