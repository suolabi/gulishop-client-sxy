//用来书写所有的接口请求函数
//15个接口，每一个接口我们都去封装一个函数来对应
//以后哪里需要数据，那我就调哪一个相应的接口请求函数就ok
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'




// 三级列表数据
// /api/product/getBaseCategoryList
// GET
export const reqCategoryList = () => {
    return Ajax({
        // 这里是配置对象,不能改
        // 不用加api/,axios封装已经配置过了
        url: '/product/getBaseCategoryList',
        // 这里大小写都行，最终都转换为大写
        method: 'get'
    })
}


// 使用mock数据接口发banner数据请求
export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method: 'get'
    })
}


// 使用mock数据接口发floor数据请求
export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method: 'get'
    })
}

//请求获取search的商品列表数据  /api/list
// post
// 请求体参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }

export const reqGoodsListInfo = (searchParams) => {
    return Ajax({
        url: "/list",
        method: 'post',
        data: searchParams // 必须是对象
    })
}

//searchParams代表的是搜索参数  如果搜索参数里面什么都没有  只是一个{} 也没问题
//返回的是所有的商品信息
//如果搜索参数当中有东西，那么返回的就是按照这些参数搜索到的商品信息
//我们测试的时候可以使用{}去作为参数发请求，但是不能不传递参数，不传递那么就相当于没有传递参数undefined，会报错
// reqGoodsListInfo({})   


// 获取商品详情数据
// /api/item/{ skuId }
// get
export const reqGoodsDetailInfo = (skuId) => {
    return Ajax({
        url: `/item/${ skuId }`,
        method: 'GET'
    })

}

// 添加到购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
// post
// {
//     "code": 200,
//     "message": "成功",
//     "data": null,
//     "ok": true
// }

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return Ajax({
        url: `/cart/addToCart/${ skuId }/${ skuNum }`,
        method: 'POST'
    })
}


// 获取购物车列表
// /api/cart/cartList
// GET

export const reqShopCartList = () => {
    return Ajax({
        url: '/cart/cartList',
        method: 'GET'
    })
}


//请求修改购物车的选中状态
// /api/cart/checkCart/{skuId}/{isChecked}   GET
export const reqUpdateCartIsChecked = (skuId, isChecked) => {
    return Ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'GET'
    })
}



// /api/cart/deleteCart/{skuId}
// DELETE
// 参数 skuId

export const reqDeleteCart = (skuId) => {
    return Ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}


// 注册用户请求
// /api/user/passport/register
// POST
// 参数请求体参数
export const reqUserRegister = (userInfo) => {
    return Ajax({
        url: '/user/passport/register',
        method: 'post',
        data: userInfo
    })

}

// 登录请求
// /api/user/passport/login
// POST
export const reqUserLogin = (userInfo) => {
    return Ajax({
        url: "/user/passport/login",
        method: 'post',
        data: userInfo
    })

}


// 退出登录请求
// /api/user/passport/logout
// get 
// 参数无
export const reqUserLogout = () => {
    return Ajax({
        url: '/user/passport/logout',
        method: 'get'
    })
}


// .获取订单交易页信息
// /api/order/auth/trade
// get
// 参数无

export const reqTradeInfo = () => {
    return Ajax({
        url: '/order/auth/trade',
        method: 'GET'
    })
}

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// post
// 参数：traderNo订单编号(拼接在路径中)；tradeInfo
export const reqSubmitOrder = (tradeNo, tradeInfo) => {
    return Ajax({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data:tradeInfo
    })
}


// 获取订单支付信息
// /api/payment/weixin/createNative/{orderId}
// GET
export const reqPayInfo = (orderId) =>{
    return Ajax({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'GET'
    })
}


// 查询订单支付状态
// /api/payment/weixin/queryPayStatus/{orderId}
// get 
export const reqOrderStatus = (orderId) =>{
    return Ajax({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get'
    })
}