import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


//创建一个新的实例
const instance = axios.create({
    //服务器地址
    baseURL: '/mock', // 请求的路径中的公共路径
    // 请求超时时间
    timeout: 20000,
});

// 请求拦截器
instance.interceptors.request.use( config=> {
    NProgress.start();
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