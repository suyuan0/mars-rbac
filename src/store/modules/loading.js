export default {
  namespaced: true,
  state: () => ({
    loading: false
  }),
  mutations: {
    openLoading(state) {
      state.loading = true
    },
    endLoading(state) {
      state.loading = false
    }
  }
}
