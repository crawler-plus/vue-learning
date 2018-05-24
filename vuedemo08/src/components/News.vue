<template>
  <div>
    <v-header></v-header>
    <hr>
    <h2>新闻组件</h2>
    <ul>
      <li>新闻</li>
    </ul>
  </div>
</template>

<script>

  import Header from './Header.vue'

export default {
  data () {
    return {
      msg:'我是一个新闻组件'
    }
  },
  methods: {
      run() {
          alert(this.msg);
      }
  },
  components: {
    'v-header': Header
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
