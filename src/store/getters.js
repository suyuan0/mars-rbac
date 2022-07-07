const getters = {
  loading: (state) => state.loading.loading,
  token: (state) => state.user.userInfo.token
}

export default getters
