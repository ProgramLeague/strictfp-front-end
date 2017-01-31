// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/* TODO */
/* 如果不使用extend，那么在子组件中访问 $route 会出现 undefined 。这是 Vue 的官方例子写法。具体原因暂时不明 */

const app = new Vue(Vue.util.extend({
  router,
  store
}, App))
app.$mount('#app')
