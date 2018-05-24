<template>
  <div id="app">
    <h2>{{msg}}</h2>
    根组件
    <br>
    <h3>{{obj.name}}</h3>
    <br>

    <ul>
      <li v-for="(item, index) in list">
        {{index}}--{{item}}
      </li>
    </ul>
    <br>

    <ul>
      <li v-for="(item, index) in list1">
        {{index}}--{{item.title}}
      </li>
    </ul>
    <br>

    <ul>
      <li v-for="item in list2">
        {{item.cate}}
        <ol>
          <li v-for="news in item.list">
            {{news.title}}
          </li>
       </ol>
      </li>
    </ul>
    <br>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好vue',
      obj: {
          name: '张三'
      },
      list: ['111', '222', '333'],
      list1: [
        {'title': '111111'},
        {'title': '222222'},
        {'title': '333333'},
        {'title': '444444'}
      ],
      list2: [
        {
            'cate': '国内新闻',
            'list': [
              {'title': '国内新闻111111'},
              {'title': '国内新闻222222'}
            ]
        },
        {
          'cate': '国际新闻',
          'list': [
            {'title': '国际新闻111111'},
            {'title': '国际新闻222222'}
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
