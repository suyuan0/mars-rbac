import axios from 'axios'
import store from '@/store'
import { message } from 'ant-design-vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 创建aixos实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    NProgress.start()
    store.commit('loading/openLoading')
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // TODO 请求有处理
    return config
  },
  (error) => {
    NProgress.done()
    store.commit('loading/endLoading')
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done()
    store.commit('loading/endLoading')
    const { code, data, msg } = response.data
    if (code === 200) {
      return data
    }
    if (code === 500001) {
      // TODO token过期
      store.commit('user/tokeNoverdue')
      return _showErrorMsg('请重新登录')
    }
    _showErrorMsg(msg)
    // TODO 响应数据处理
    return Promise.reject(new Error(msg))
  },
  (error) => {
    NProgress.done()
    store.commit('loading/endLoading')
    const { message } = error
    if (message.includes('Network Error')) {
      _showErrorMsg('网络错误啦')
    }
    if (message.includes('timeout')) {
      _showErrorMsg('网络超时啦')
    }
    return Promise.reject(error)
  }
)

// 失败信息提示
const _showErrorMsg = (msg) => {
  message.error(msg)
}

// 统一传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

export default request
