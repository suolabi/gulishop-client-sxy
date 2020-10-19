import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import "@/mock/mockServer"
import * as API from '@/api'


Vue.config.productionTip = false

import '@/api'

// import {reqCategoryList} from '@/api'
// reqCategoryList()

//全局注册的各种组件，因为很多地方用到
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'

Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)

import { MessageBox,Message,Button} from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.use(Button)



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
