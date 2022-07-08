const getters = {
  loading: (state) => state.loading.loading,
  token: (state) => state.user.userInfo.token,
  actionList: (state) => state.user.actionList,
  userInfo: (state) => state.user.userInfo,
  menuLIst: (state) => state.user.menuList
}

export default getters
