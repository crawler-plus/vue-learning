import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


/*1.state在vuex中用于存储数据*/
var state={

    count:1
}

/*2.mutations里面放的是方法，方法主要用于改变state里面的数据
*/
var mutations={

    incCount(){

        ++state.count;
    }
}

// 有点类似计算属性,改变state里面count数据的时候回触发getters里面的方法获取新的值
var getters = {
  computedCount: (state)=>{
    return state.count * 2
  }
}

// action触发mutations方法
var actions = {
  incMutationsCount(context) {
    context.commit('incCount') // 表示执行mutations里面的incCount方法，改变count
  }
}

//vuex  实例化 Vuex.store
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})


export default store;

