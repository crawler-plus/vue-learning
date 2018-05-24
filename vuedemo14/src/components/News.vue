<template>
  <div>
    {{msg}}

    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/' + item.aid">{{item.title}}--{{key}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'我是一个新闻组件',
      list: []
    }
  },
  methods: {
      requestData() {
          // jsonp 请求的话，后台api接口要支持jsonp
          var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          this.$http.jsonp(api).then((res)=> {
            console.log(res);
            this.list = res.body.result;
          }, (err)=> {
            console.log(err);
          })
      }
  },
  mounted() {
      this.requestData();
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
