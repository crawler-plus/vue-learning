<template>
  <div id="app">
    <router-link to="/news">新闻</router-link>
    <router-link to="/home">首页</router-link>
    <router-link to="/user">用户</router-link>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      msg:'hello'
    }
  }
}
</script>

<style lang="scss">
</style>
