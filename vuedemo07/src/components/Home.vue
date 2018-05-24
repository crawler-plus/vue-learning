<template>
  <div>
    <v-header></v-header>
    <hr>
    <h2>这是一个首页组件--{{msg}}</h2>
    <button @click="run">run</button>
  </div>
</template>

<script>

  import Header from './Header.vue'

export default {
  data () {
    return {
      msg:'我是一个首页组件'
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
  h2 {
    color: red;
  }
</style>
