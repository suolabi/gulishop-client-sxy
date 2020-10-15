import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess"

export default [
  {
    path:'/paysuccess',
    component:PaySuccess
  },
  {
    path:'/pay',
    component:Pay
  },
  {
    path:'/trade',
    component:Trade
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess
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