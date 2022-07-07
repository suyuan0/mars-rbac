const getters = {
  loading: (state) => state.loading.loading,
  token: (state) => state.user.userInfo.token,
  actionList: (state) => state.user.actionList
}

export default getters
