import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

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
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})