import Vue from 'vue'
import Router from 'vue-router'
import content from './components/content'
import dberror from './components/DBerror'
import bolgMoving from './components/bolg_moving'
// 直接将router实例推到 main.js 中
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: 'content' },
    { path: '/content', component: content },
    { path: '/dberror', component: dberror },
    { path: '/bolg_moving', component: bolgMoving }
  ]
})
export default router
