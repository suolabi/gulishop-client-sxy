// import Home from "@/pages/Home"
const Home = () => import('@/pages/Home') 
const Login = () => import('@/pages/Login') 
// import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess"
import Center from "@/pages/Center"
import MyOrder from "@/pages/Center/MyOrder"
import GroupOrder from "@/pages/Center/GroupOrder"
import store from "@/store"



export default [
  {
    path:'/center',
    component:Center,
    children:[
      {
        path:'myorder',
        component:MyOrder
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'',
        redirect:'myorder'
      }
    ]
  },
  {
    path:'/paysuccess',
    component:PaySuccess,
    // 只有从支付页面才能跳转到支付成功页面
    beforeEnter: (to, from, next) => {
      if(from.path === '/pay'){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/pay',
    component:Pay,
    // 只有从交易页面（创建订单）页面才能跳转到支付页面
    beforeEnter: (to, from, next) => {
      if(from.path === '/trade'){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/trade',
    component:Trade,
    // 只有从购物车界面才能跳转到交易页面（创建订单）
    beforeEnter: (to, from, next) => {
      if(from.path === '/shopcart'){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    beforeEnter: (to, from, next) => {
      let skuNum = to.query.skuNum
      let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
      // 只有携带了skuNum和sessionStorage内部有skuInfo数据  才能看到添加购物车成功的界面
      if(skuNum && skuInfo){
        // 说明登录了，到首页
        next()
      }else{
        // 说明没登录,放行
        next('/')
      }
    }
  },
  {
    path: '/detail/:goodsId',
    component: Detail
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHide: true
    },
    beforeEnter: (to, from, next) => {
      // 只有没登录才能看到登录的界面 路由独享守卫
      if(store.state.user.userInfo.name){
        // 说明登录了，到首页
        next('/')
      }else{
        // 说明没登录,放行
        next()
      }
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHide: true
    }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    name: 'search'
  },
  {
    path: '/',
    redirect: '/home'
  }
]