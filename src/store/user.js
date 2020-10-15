import {getUserTempId,} from '@/utils/userabout'
import {reqUserRegister,reqUserLogin,reqUserLogout} from '@/api'
// 书写四个核心对象
//存数据的地方，多个属性的对象
const state = {
  userTempId:getUserTempId(),
  userInfo:JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}
  
}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
  RECIEVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },

  RESETUSERINFO(state){
    state.userInfo = {}
  }
}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
  async userRegister({commit},userInfo) {
    const result = await reqUserRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('faild'))
    }
  },

  async userLogin({commit},userInfo) {
    const result = await reqUserLogin(userInfo)
    if(result.code === 200) {
      commit('RECIEVEUSERINFO',result.data)
      //登录成功把用户的信息存一份
      localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data))
      return '登录成功'
    }else {
      return Promise.reject(new Error('faild'))
    }
  },



  // 退出登录
  async userLogout({commit}){
    const result = await reqUserLogout()
    if(result.code === 200) {
      // 清空userinfo信息
      commit('RESETUSERINFO')
      localStorage.removeItem('USERINFO_KEY')
      return 'success'
    }else{
      return Promise.reject(new Error('faild'))
    }

  }
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {}



// 向外暴露
export default {
    state,
    mutations,
    actions,
    getters
  }