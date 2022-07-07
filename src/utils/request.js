import axios from 'axios'

// 创建aixos实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 请求有处理
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // TODO 响应数据处理
    return response
  },
  (error) => Promise.reject(error)
)

// 统一传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

export default request()
