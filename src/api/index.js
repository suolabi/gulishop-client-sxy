//用来书写所有的接口请求函数
//15个接口，每一个接口我们都去封装一个函数来对应
//以后哪里需要数据，那我就调哪一个相应的接口请求函数就ok
import Ajax from '@/ajax/Ajax'



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