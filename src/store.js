import Vue from 'vue'
import Vuex from 'vuex'
// const myPlugin = store => {
//   // 当 store 初始化后调用
//   store.subscribe((mutation, state) => {
//   // 每次 mutation 之后调用
//   // mutation 的格式为 { type, payload }
//     console.log(mutation)
//     console.log(store)
//   })
// }
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    UI: {
      Button: true,
      betaPlayer: false
    },
    fetched: {

    }
    // plugins: [myPlugin]
  }
})
export default store
