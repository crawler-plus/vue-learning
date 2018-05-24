import Vue from 'vue'
import App from './App.vue'
// 引入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource); // 使用vue-resource

new Vue({
  el: '#app',
  render: h => h(App)
})
