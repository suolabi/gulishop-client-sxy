import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文message


VeeValidate.Validator.localize('zh_CN', {
    messages: {
      ...zh_CN.messages, // 拆包，把中文的提示信息加入
      is: (field) => `${field}必须与密码相同`  // 修改内置规则的message
    },
    attributes: { // 给校验的field属性名映射中文名称
      phone: '手机号',
      code: '验证码',
      password: '密码',
      password2: '确认密码',
      isCheck: '阅读协议'
    }
  })


  //自定义了一个必须打钩的规则
VeeValidate.Validator.extend('agree', {
    validate: value => {
      return value
    },
    getMessage: field => field + '必须同意'
  })