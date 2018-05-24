<template>
  <div>
    <v-header :title="title" :homemsg="msg" :run="run" :home="this"></v-header>
  </div>
</template>

<script>

  import Header from './Header.vue'

export default {
  data () {
    return {
      msg:'我是一个首页组件',
      title:'from 父组件'
    }
  },
  methods: {
  },
  components: {
   'v-header': Header
  },
  methods: {
      run(data){
          alert('我是home组件的run方法' + data);
      }
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
  h2 {
    color: red;
  }
</style>
