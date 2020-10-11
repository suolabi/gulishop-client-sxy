import {reqGoodsDetailInfo} from '@/api'
// 书写四个核心对象
//存数据的地方，多个属性的对象
const state = {
    goodsDetailInfo:{}
}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
    RECEIVEGOODSDETAILINFO(state,goodsDetailInfo){
        state.goodsDetailInfo = goodsDetailInfo
    }
}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
    async getGoodsDetailInfo({commit},skuId){
        const result = await reqGoodsDetailInfo(skuId)
        if (result.code === 200) {
            commit('RECEIVEGOODSDETAILINFO',result.data)
        }
    }
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {
    // 避免a.b.c
    categoryView(state) {
        return state.goodsDetailInfo.categoryView || {}
    },
    skuInfo(){
        return state.goodsDetailInfo.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.goodsDetailInfo.spuSaleAttrList || {}
    },
}



//2、向外暴露一个Store对象
export default {
    state,
    mutations,
    actions,
    getters,
}
