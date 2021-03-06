import {
    reqTradeInfo
} from '@/api'
// 书写四个核心对象
//存数据的地方，多个属性的对象
const state = {
    tradeInfo: {},
    
}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
    RECEIVETRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
    async getTradeInfo({
        commit
    }) {
        const result = await reqTradeInfo()
        if (result.code === 200) {
            commit('RECEIVETRADEINFO', result.data)
        } 
    }
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}