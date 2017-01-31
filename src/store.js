import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    UI: {
      Button: true,
      betaPlayer: false
    },
    fetched: {
    },
    clone: {
    }
  },
  getters: {
  }
})
export default store
