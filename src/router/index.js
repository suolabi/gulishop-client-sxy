import store from '@/store'
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


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    //水平垂直坐标，期望滚动到哪个位置，跳转的第一下到哪个位置我们不能控制，但之后我们能控制
    return {
      x: 0,
      y: 0
    }
  }
})



router.beforeEach((to, from, next) => {
  // 必须登录后才能访问的多个界面用全局守卫（交易相关、支付相关、用户中心相关） 自动跳转前面想而没到的页面
  // 拿到当前路径
  let targetPath = to.path
  if(targetPath.indexOf('/pay')=== 0 || targetPath.startsWith('/trade') || targetPath.startsWith('/center')){
    // 查看用户是否登录
    if(store.state.user.userInfo.name){
      // 如果存在，就是登录了，放行
      next()
    }else{
      // 如果没登录。跳转到登录页面
      next('/login?redirect='+targetPath)
    }
  } else {
    // 若不是这三个页面，放行
    next()
  }

})
export default router