import Vue from 'vue'
import Router from 'vue-router'
import setthings from './components/setthings'
import os from './components/os'
import content from './components/content'
import dberror from './components/DBerror'
// 直接将router实例推到 main.js 中
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: 'content' },
    { path: '/setthings', name: 'content', component: setthings },
    { path: '/os', component: os },
    { path: '/content', component: content },
    { path: '/dberror', component: dberror }
  ]
})
export default router
