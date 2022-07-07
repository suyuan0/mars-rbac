import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'
import loading from './modules/loading'

export default createStore({
  modules: {
    user,
    loading
  },
  getters
})
