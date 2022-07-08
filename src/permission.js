import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const actions = store.getters.actionList
      if (actions) {
        const actions = await store.dispatch('user/userPermissionList')
        const routes = await store.dispatch('permission/filterMenus', actions)
        routes.forEach((item) => router.addRoute(item))
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
