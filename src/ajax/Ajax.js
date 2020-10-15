import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'


//创建一个新的实例
const instance = axios.create({
    //服务器地址
    baseURL: '/api', // 请求的路径中的公共路径
    // 请求超时时间
    timeout: 20000,
});

// 请求拦截器
instance.interceptors.request.use( config=> {
    NProgress.start();

    // 获取userTempId值
    let userTempId = store.state.user.userTempId
    if(userTempId){
        // config是请求报文
        config.headers.userTempId = userTempId
    }

    //登录成功后需要把token带着，从今往后每个请求都会带过去两个标识，一个是临时的一个是登录后的
    //带过去两个目的是为了后端能够把之前临时标识对应的数据合并到登录后标识对应的数据
    let token = store.state.user.userInfo.token
    if(token){
        config.headers.token = token
    }

    return config;
});
// }, function (error) {

//     return Promise.reject(error);
// });

//响应拦截器
instance.interceptors.response.use(function (response) {
    NProgress.done();
    return response.data;
}, function (error) {
    // 关闭进度条
    NProgress.done();
    alert('发送ajax请求失败' + error.message || "未知错误")
    // 只接收成功，不接受失败
    return new Promise(() => {})
});





export default instance