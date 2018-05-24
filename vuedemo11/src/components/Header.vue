<template>
  <div>
    <h2>这是一个头部组件--{{msg}}</h2>
    <br>
    父组件给子组件传值：{{title}}--{{homemsg}}
    <!--<button @click="run(123)">执行父组件的fun方法</button>-->
    <!--<button @click="getParent">获取父组件的数据和方法</button>-->
  </div>
</template>

<script>


export default {
  data () {
    return {
      msg:'我是一个头部组件'
    }
  },
  methods: {
    getParent(){
        alert(this.home.title); // 获取父组件的属性
        this.home.run();
    }
  },
  // 接收父组件的属性，方法，整个实例 无任何验证
//  props: ['title', 'homemsg', 'run', 'home']
  // 有验证功能
  props:{
      'title': String,
      'homemsg':String
  }
}
</script>

<!-- scoped 是css对自己的组件有效-->
<style lang="scss" scoped>
</style>
