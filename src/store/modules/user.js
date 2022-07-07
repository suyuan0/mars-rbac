import { setItem, getItem } from '@/utils/storage'
import { USER_INFO } from '@/utils/const'
import { login } from '@/api/user'

export default {
  namespaced: true,
  state: () => ({
    userInfo: getItem(USER_INFO) || {}
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.token = userInfo
      setItem(USER_INFO, userInfo)
    }
  },
  actions: {
    async userLogin({ commit }, data) {
      commit('setUserInfo', await login(data))
    }
  }
}
