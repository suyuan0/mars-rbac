import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'
import loading from './modules/loading'
import permission from './modules/permission'

export default createStore({
  modules: {
    user,
    loading,
    permission
  },
  getters
})
