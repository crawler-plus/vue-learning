<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <button v-on:click="run1">获取数据</button>
    <button @click="run2">获取数据</button>
    <button @click="getMsg">获取data里面的msg</button>
    <button @click="setMsg">改变data里面的msg</button>
    <button @click="requestData">请求数据</button>
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>
    <button @click="deleteData('111')">执行方法传值</button>
    <button @click="deleteData('222')">执行方法传值</button>
    <button data-aid='123' @click="eventFn($event)">事件对象</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好vue',
      list: []
    }
  },
  methods: {
      run1() {
          alert("点击事件1")
      },
      run2() {
          alert("点击事件2")
      },
      getMsg() {
          alert(this.msg);
      },
      setMsg() {
          this.msg = '改变后的msg'
      },
      requestData() {
          for(var i = 0; i < 10; i ++) {
              this.list.push(`我是第${i}条数据`)
          }
      },
      deleteData(val) {
          alert(val);
      },
      eventFn(e) {
          console.log(e);
          e.srcElement.style.background = 'red';
          console.log(e.srcElement.dataset); // 获取自定义节点的值
      }
  }
}
</script>

<style lang="scss">
</style>
