import { setItem, getItem, removeItem } from '@/utils/storage'
import { USER_INFO } from '@/utils/const'
import { login, permissionList } from '@/api/user'
import router from '@/router'
import { resetRouter } from '@/utils/removeRoutes'

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
    },
    tokeNoverdue(state) {
      resetRouter()
      state.userInfo = {}
      removeItem(USER_INFO)
      router.push('/login')
    }
  },
  actions: {
    // 用户信息
    async userLogin({ commit }, data) {
      try {
        const res = await login(data)
        commit('setUserInfo', res)
      } catch (e) {
        console.log(e)
      }
    },
    async userPermissionList({ commit }) {
      try {
        const { actionList } = await permissionList()
        commit('setActionList', actionList)
        return actionList
      } catch (e) {
        console.log(e)
      }
    }
  }
}
