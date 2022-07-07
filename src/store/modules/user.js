import { setItem, getItem } from '@/utils/storage'
import { USER_INFO } from '@/utils/const'
import { login, permissionList } from '@/api/user'

export default {
  namespaced: true,
  state: () => ({
    userInfo: getItem(USER_INFO) || {},
    actionList: [],
    menuList: []
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem(USER_INFO, userInfo)
    },
    setActionList(state, actionList) {
      state.actionList = actionList
    }
  },
  actions: {
    // 用户信息
    async userLogin({ commit }, data) {
      const res = await login(data)
      commit('setUserInfo', res)
    },
    async userPermissionList({ commit }, data) {
      await permissionList()
    }
  }
}
