import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

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


export  default  new  VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHide:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search'
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})