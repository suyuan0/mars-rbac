import { publicRoutes, prviteRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    menus: publicRoutes
  }),
  mutations: {
    setMenus(state, routes) {
      state.menus.push(...routes)
    }
  },
  actions: {
    filterMenus({ commit }, actionList) {
      const routes = []
      actionList.forEach((name) => {
        const data = prviteRoutes.filter((item) => item.name === name)
        routes.push(...data)
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setMenus', routes)
      return routes
    }
  }
}
