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

  import axios from 'axios'

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
        axios.get(api).then(res=>{
            console.log(res);
            this.list = res.data.result;
        })
          .catch(err=>{
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
