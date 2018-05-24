<template>
  <div>
    <hr>
    <h2>生命周期函数演示 --{{msg}}</h2><br>
    <button @click="setMsg">执行方法</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'生命周期函数演示'
    }
  },
  methods: {
    setMsg() {
        this.msg = '我是改变后的数据';
    }
  },
  beforeCreate(){
      console.log("实例创建之前");
  },
  created(){
    console.log("实例创建完成");
  },
  beforeMount(){
    console.log("魔板编译之前");
  },
  mounted(){
    console.log("魔板编译完成");
  },
  beforeUpdate(){
    console.log("数据更新之前");
  },
  updated(){
    console.log("数据更新完毕");
  },
  beforeDestroy(){
    console.log("实例销毁之前");
  },
  destroyed(){
    console.log("实例销毁完成");
  }

}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
