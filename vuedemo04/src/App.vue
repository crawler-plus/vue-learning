<template>
  <div id="app">
    <h2>{{msg}}</h2>
    根组件
    <input type="text" v-model="msg">
    {{msg}}
    <button v-on:click="getMsg">获取表单数据</button>
    <button v-on:click="setMsg">设置表单数据</button>
    <hr>
    <br>
    <input type="text" ref="userInfo">
    <button v-on:click="getInputValue">获取这个数据</button>
    <br>
    <div ref="box">box</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好vue'
    }
  },
  methods: {
      getMsg() {
          // 获取data里面的数据
        console.log(this.msg);
      },
      setMsg() {
        // 设置data里面的数据
        this.msg = "改变后的数据";
      },
      getInputValue() {
          //  获取ref定义的dom节点
        console.log(this.$refs.userInfo);
        console.log(this.$refs.userInfo.value);
        this.$refs.box.style.background = 'red';
      }
  }
}
</script>

<style lang="scss">
</style>
