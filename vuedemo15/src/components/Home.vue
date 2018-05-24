<template>
    <div>
       我是首页组件  -- {{this.$store.state.count}}--{{this.$store.getters.computedCount}}
        <br>
        <button @click="incCount()">增加数量+</button>
    </div>
</template>

<script>
    //1. 引入store   建议store的名字不要变
    import store from '../vuex/store.js';
    //2.注册
    export default{
        data(){
            return {
               msg:'我是一个home组件'
            }
        },
        store,
        methods:{
            incCount(){
                //改变vuex store里面的数据
//                this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
                  this.$store.dispatch('incMutationsCount') /*触发 actions 里面的方法 */
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
