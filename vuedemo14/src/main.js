import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router.js'

Vue.use(VueResource);


new Vue({
  el: '#app',
  router, // 挂载路由
  render: h => h(App)
})
