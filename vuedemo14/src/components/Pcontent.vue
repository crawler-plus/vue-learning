<template>
  <div>
    {{msg}}
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'商品详情'
    }
  },
  mounted() {
      // get传值
    console.log(this.$route.query);
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
