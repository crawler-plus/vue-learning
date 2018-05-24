<template>
  <div>
    {{msg}}
    <br>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/pcontent?aid=' + key">{{item}}--{{key}}</router-link>
      </li>
    </ul>
    <button @click="goNews">通过js跳转到新闻页面</button>
    <button @click="goNewsContent">通过js跳转到新闻详情页面</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'我是一个首页组件',
      list: ['商品1111', '商品2222', '商品3333']
    }
  },
  methods: {
    goNews() {
        // 编程式导航
//        this.$router.push({path: 'news'});
      this.$router.push({name: 'news'}); // 命名路由跳转
    },
    goNewsContent() {
      // 编程式导航
//      this.$router.push({path: 'content/495'});
      this.$router.push({path: 'content/495'});
    }

  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
