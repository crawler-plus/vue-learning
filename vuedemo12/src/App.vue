<template>
  <div id="app">
    <h2>根组件</h2>
    <v-home></v-home>
  </div>
</template>

<script>

  //  引入组件
  import Home from './components/Home.vue'

export default {
  data () {
    return {
      msg:'hello'
    }
  },
  // 挂在组件
  components: {
      'v-home': Home
  }
}
</script>

<style lang="scss">
</style>
