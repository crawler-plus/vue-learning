<template>
  <div>
    <br>
    <hr>
    {{msg}}
    <nav-header ref="header"></nav-header>
    首页组件
    <button @click="getChildData">获取子组件的数据和方法</button>
  </div>
</template>

<script>

  import NavHeader from './Header.vue';

export default {
  data () {
    return {
      msg:'我是一个首页组件',
      title:'from 父组件'
    }
  },
  methods: {
    getChildData (){
        // 获取子组件属性方法
        alert(this.$refs.header.msg);
        this.$refs.header.run();
    },
    run() {
        alert("我是home组件的run方法");
    }
  },
  components: {
    NavHeader
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
  h2 {
    color: red;
  }
</style>
