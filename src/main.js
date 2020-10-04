import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false



new Vue({
  el:'#app',
  //1、定义带注册  2、使用组件  3、渲染（依赖vue的一个loader去解析的vue-template-compiler）
  render:h=>h(App) 
  
})

