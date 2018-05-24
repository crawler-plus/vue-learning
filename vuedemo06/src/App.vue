<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="doAdd($event)">
    <br>
    <hr>
    <br>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList">{{item.title}} <button @click="removeData(key)">删除</button>
      </li>
    </ul>
    <br>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList">{{item.title}} <button @click="removeData(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>

// 引入模块
import storage from './module/storage'

export default {
  name: 'app',
  data () {
    return {
      todo: '',
      list: [
      ]
    }
  },
  methods: {
    doAdd (e) {
        if(e.keyCode === 13) {
          // 获取文本框输入的值
          let todo = this.todo;
          // 把文本框的值push到list中
          this.list.push({
            title: this.todo,
            checked: false
          });
          this.todo = '';
        }
      storage.set("list", this.list);
    },
    removeData(key) {
        this.list.splice(key, 1);
      storage.set("list", this.list);
    },
    saveList() {
      storage.set("list", this.list);
    }
  },
  // 生命周期函数 /** vue页面刷新就会触发的方法**/
  mounted() {
    let list = storage.get("list");
    if(list) {
      this.list = list;
    }
  }
}
</script>

<style lang="scss">
</style>
