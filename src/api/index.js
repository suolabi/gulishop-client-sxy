//用来书写所有的接口请求函数
//15个接口，每一个接口我们都去封装一个函数来对应
//以后哪里需要数据，那我就调哪一个相应的接口请求函数就ok
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'




// 三级列表数据
// /api/product/getBaseCategoryList
// GET
export const reqCategoryList = ()=>{
    return Ajax({
        // 这里是配置对象,不能改
        // 不用加api/,axios封装已经配置过了
        url:'/product/getBaseCategoryList',
        // 这里大小写都行，最终都转换为大写
        method:'get'
    })
}


// 使用mock数据接口发banner数据请求
export const reqBannerList = ()=>{
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}


// 使用mock数据接口发floor数据请求
export const reqFloorList = ()=>{
    return mockAjax({
        url:'/floor',
        method:'get'
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

export const reqGoodsListInfo = (searchParams)=>{
    return Ajax({
        url:"/list",
        method:'post',
        data:searchParams  // 必须是对象
    })
}

//searchParams代表的是搜索参数  如果搜索参数里面什么都没有  只是一个{} 也没问题
//返回的是所有的商品信息
//如果搜索参数当中有东西，那么返回的就是按照这些参数搜索到的商品信息
//我们测试的时候可以使用{}去作为参数发请求，但是不能不传递参数，不传递那么就相当于没有传递参数undefined，会报错
// reqGoodsListInfo({})   
