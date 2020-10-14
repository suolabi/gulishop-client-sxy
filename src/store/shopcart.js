import {reqAddOrUpdateShopCart,reqShopCartList,reqUpdateCartIsChecked,reqDeleteCart} from '@/api'
// 书写四个核心对象
//存数据的地方，多个属性的对象
const state = {
    shopCartList:[]
}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
    RECEIVESHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        const result = await reqAddOrUpdateShopCart(skuId,skuNum) 
        if(result.code === 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('添加购物车失败'))
        }
    },

    async getShopCartList({commit}){
        const result = await reqShopCartList()
        if(result.code === 200) {
            commit('RECEIVESHOPCARTLIST',result.data)
        }
    },


    //请求修改购物车的选中状态
    async updateCartIsChecked({commit},{skuId,isChecked}){
        const result = await reqUpdateCartIsChecked(skuId,isChecked)
        if(result.code === 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('faild'))
        }
    },

    
    // 在actions再触发一个action
    updateAllCartIsChecked({commit,state,dispatch},isChecked){
        // 获取所有选中cart的状态，使用promise.all
        let promises = []
        state.shopCartList.forEach(item => {
            // 如果一样
            if(item.isChecked === isChecked)  return
            // 如果不一样
            let promise = dispatch('updateCartIsChecked',{skuId:item.skuId,isChecked:isChecked})
            promises.push(promise)
        });
        return Promise.all(promises)
    },

    async deleteCart({commit},skuId){
        // console.log(skuId);
        const result = await reqDeleteCart(skuId)
        if(result.code === 200){
            return 'ok'
        }else {
            return Promise.reject(new Error('faild'))
        }
    },

    // 在actions里再触发一个action
    deleteAllCar({state,dispatch}){
        let promises = []
        state.shopCartList.forEach(item =>{
            // 没选中的返回
            if(!item.isChecked) return
            let promise = dispatch('deleteCart',item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
    }
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {}



//2、向外暴露一个Store对象
export default {
    state,
    mutations,
    actions,
    getters
}
