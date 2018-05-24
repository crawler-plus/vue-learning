<template>
  <div id="app">
    <button @click="getData">请求数据</button>
    <hr>
    <br>
    <ul>
      <li v-for="item in list">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        list:[]
    }
  },
  methods: {
    getData() {
        var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        this.$http.get(api).then(response=>{
          console.log(response);
          // 注意this指向
          this.list = response.body.result;
        }, err=>{
            console.log(err);
        })
    }
  },
  // 加载就请求
  mounted() {
      this.getData();
  }
}
</script>

<style lang="scss">
</style>
