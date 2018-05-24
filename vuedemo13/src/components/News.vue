<template>
  <div>
    {{msg}}
    <button @click="emitHome">给home组件广播数据</button>
  </div>
</template>

<script>

  // 引入vue实例
  import VueEvent from '../model/VueEvent.js'

export default {
  data () {
    return {
      msg:'我是一个新闻组件'
    }
  },
  methods: {
    emitHome() {
      // 广播
      VueEvent.$emit('to-home', this.msg);
    }
  },
  mounted() {
      VueEvent.$on('to-news', data=>{
          console.log(data);
      })
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
