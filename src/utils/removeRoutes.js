import store from '@/store'
import router from '@/router'

export const resetRouter = () => {
  if (store.getters.userInfo && store.getters.menuLIst) {
    const menus = store.getters.menuLIst
    menus.forEach((item) => {
      router.removeRoute(item)
    })
  }
}
