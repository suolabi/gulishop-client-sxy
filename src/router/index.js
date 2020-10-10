import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './router'


// 重新定义push    router ===> index.js       
const {
  push: originPush
} = VueRouter.prototype

VueRouter.prototype.push = function (location, onResolve, onRejected) {
  // 判断回调，代表没有出传递处理的回调，无论成功还是失败
  if (onResolve === undefined && onRejected === undefined) {
    // this指的是实例化对象,路由对象
    // 如果没传，就调用原来的push方法
    return originPush.call(this, location).catch(() => {})
  } else {
    return originPush.call(this, location, onResolve, onRejected)
  }
}


// 重新定义replace
const {
  replace: originReplace
} = VueRouter.prototype

VueRouter.prototype.replace = function (location, onResolve, onRejected) {
  // 判断回调，代表没有出传递处理的回调，无论成功还是失败
  if (onResolve === undefined && onRejected === undefined) {
    // this指的是路由对象
    // 如果没传，就调用原来的push方法
    return originReplace.call(this, location).catch(() => {})
  } else {
    return originReplace.call(this, location, onResolve, onRejected)
  }
}


export default new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    //水平垂直坐标，期望滚动到哪个位置，跳转的第一下到哪个位置我们不能控制，但之后我们能控制
    return {
      x: 0,
      y: 0
    }
  }
})