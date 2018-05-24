<template>
  <div>
    {{msg}}
    <h2>{{list.title}}</h2>
    <div v-html="list.content"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'我是一个新闻详情组件',
      list: []
    }
  },
  mounted() {
    console.log(this.$route.params);  // 获取动态路由传值
    var aid = this.$route.params.aid;
    this.requestData(aid);
  },
  methods: {
      requestData(aid) {
          var api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
          this.$http.jsonp(api).then((res)=> {
            console.log(res);
            this.list = res.body.result[0];
          }, (err)=> {
            console.log(err);
          })
      }
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
