<template>
  <div>
    <h2>这是一个头部组件</h2>
    <br>
    <button @click="getParentData()">获取父组件的数据和方法</button>
  </div>
</template>

<script>


export default {
  data () {
    return {
      msg:'我是一个头部组件'
    }
  },
  methods: {
    run() {
        alert("我是子组件的run方法");
    },
    getParentData() {
      alert(this.$parent.msg);
      this.$parent.run();
    }
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
