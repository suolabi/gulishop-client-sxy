import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import "@/mock/mockServer"
import * as API from '@/api'
import './validate'


Vue.config.productionTip = false

import '@/api'

// import {reqCategoryList} from '@/api'
// reqCategoryList()

//全局注册的各种组件，因为很多地方用到
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import MyPagination from '@/components/MyPagination'

Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('MyPagination',MyPagination)

import { MessageBox,Message,Button,Pagination} from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.use(Button)
Vue.use(Pagination)

import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})




new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  el:'#app',
  //1、定义带注册  2、使用组件  3、渲染（依赖vue的一个loader去解析的vue-template-compiler）
  render:h=>h(App), 
  router,
  store
})
