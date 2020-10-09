import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import "@/mock/mockServer"

Vue.config.productionTip = false

// import '@/api'

// import {reqCategoryList} from '@/api'
// reqCategoryList()

//全局注册的各种组件，因为很多地方用到
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'

Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el:'#app',
  //1、定义带注册  2、使用组件  3、渲染（依赖vue的一个loader去解析的vue-template-compiler）
  render:h=>h(App), 
  router,
  store
})
