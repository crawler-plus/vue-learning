<template>
  <div id="app">
    <h2>根组件</h2>
    <!-- 使用组件 -->
    <v-home></v-home>
    <hr>
    <v-news></v-news>
  </div>
</template>

<script>

  //  引入组件
  import Home from './components/Home.vue'
  import News from './components/News.vue'

export default {
  name: 'app',
  data () {
    return {
      msg:'hello'
    }
  },
  // 挂在组件
  components: {
      'v-home': Home,
      'v-news': News
  }
}
</script>

<style lang="scss">
</style>
