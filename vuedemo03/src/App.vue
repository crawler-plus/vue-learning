<template>
  <div id="app">
    <h2>{{msg}}</h2>
    根组件
    <br>
    <div v-bind:title="title">鼠标瞄上去</div>
    <img v-bind:src="url" alt="">
    <img :src="url" alt=""><br>
    <!-- 绑定html-->
    <div v-html="h"></div>
    <!-- 绑定数据的另一种方法-->
    {{msg}}
    <div v-text="msg"></div>

      <ul>
        <li v-for="(item, index) in list" :class="{'red': index%2==0, 'blue': index%2==1}">
            {{item}}
        </li>
      </ul>

    <div v-bind:class="{'red':flag}">
      我是一个div
    </div>

    <div v-bind:class="{'red':flag, 'blue': !flag}">
      我是另一个div
    </div>

    <div :class="{'red':flag}">
      我是一个div
    </div>

    <div :class="{'red':flag, 'blue': !flag}">
      我是另一个div
    </div>

    <div class="box" v-bind:style="{'width' : boxWidth+'px'}">
      div
    </div>
    <br>
    <div class="box" :style="{'width' : boxWidth+'px'}">
      div
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好vue',
      title: '我是一个title',
      url: 'src/assets/logo.png',
      h: '<h2>我是h2</h2>',
      list: ['111', '222', '333'],
      flag: false,
      boxWidth: 500
    }
  }
}
</script>

<style lang="scss">
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .box {
    height: 100px;
    width: 100px;
    background: red;
  }
</style>
