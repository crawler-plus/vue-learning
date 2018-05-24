<template>
  <div>
    <v-header></v-header>
    <hr>
    <v-life v-if="flag"></v-life>
    <button @click="flag=!flag">挂载以及卸载v-life</button>
  </div>
</template>

<script>

  import Header from './Header.vue'
  import Life from './Life.vue'
  import VLife from "./Life";

export default {
  data () {
    return {
      msg:'我是一个首页组件',
      flag: true
    }
  },
  methods: {
      run() {
          alert(this.msg);
      }
  },
  components: {
    VLife, 'v-header': Header,
      'v-life': Life
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
  h2 {
    color: red;
  }
</style>
