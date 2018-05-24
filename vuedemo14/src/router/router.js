/**
 * Created by yinbo on 2018/5/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 创建组件
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Content from '../components/Content.vue'
import Pcontent from '../components/Pcontent.vue'
import User from '../components/User.vue'
import UserAdd from '../components/user/UserAdd.vue'
import UserList from '../components/user/UserList.vue'

// 配置路由
const routes = [
  {
    path: '*', redirect: Home // 默认跳转
  },
  {
    path: '/home', component: Home
  },
  {
    path: '/news', component: News, name:'news' // name为命名路由
  },
  {
    path: '/content/:aid', component: Content // 动态路由
  },
  {
    path: '/pcontent', component: Pcontent
  },
  {
    path: '/user', component: User,
    // 子路由
    children:[
      {
        path: 'userAdd', component: UserAdd
      },{
        path: 'userList', component: UserList
      }
    ]
  }
]

// 实例化VueRouter
const router = new VueRouter({
  // mode: 'history', // hash模式改为history模式
  routes
})

export default router;

