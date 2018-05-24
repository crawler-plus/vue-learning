<template>
  <div>
    {{msg}}
    <br>
    <button @click="emitNews">给news组件广播数据</button>
    <br>
  </div>
</template>

<script>

  // 引入vue实例
  import VueEvent from '../model/VueEvent.js'

export default {
  data () {
    return {
      msg:'我是一个首页组件'
    }
  },
  methods: {
    emitNews() {
      // 广播数据
      VueEvent.$emit('to-news', this.msg);
    }
  },
  mounted() {
    VueEvent.$on('to-home', data=>{
      console.log(data);
    })
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
