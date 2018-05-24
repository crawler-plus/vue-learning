<template>
  <div>
    <h2>这是一个头部组件--{{msg}}</h2>
  </div>
</template>

<script>


export default {
  data () {
    return {
      msg:'我是一个头部组件'
    }
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
