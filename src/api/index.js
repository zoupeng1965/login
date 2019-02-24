import Vue from 'vue'

import axios from "axios";
import router from '../router'
import config from "./config.js"
// 将Axios挂载到Vue的原型中
Vue.prototype.$http=axios;
// axios配置
// 请求的根路径
// axios.defaults.baseURL = 'http://litc.pro:9999/v1/';
// // 是否开启cookie跨域携带
// axios.defaults.withCredentials = true;

// 循环获取config对象的所有属性
// 将所有属性赋值给axios.defaults对象
// 自动挂载config的配置到axios默认配置中
for (const k in config ) {
    axios.defaults[k]=config[k]

}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 添加token的heaaers头
  let token = localStorage.getItem("token") || "";
  config.headers.Authorization = token
  return config;
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  response=response.data
  return response;
}, function (error) {
  // console.log(error.response.data.status,222)
  // console.dir(this)
  // console.dir(Vue,55)
  // console.log(router,44)
  Vue.prototype.$message({
    showClose: true,
    message: error.response.data.errMsg,
  })
if(error.response.data.status==401){
  // console.log(router,44)
  // 问老师
  // Vue.prototype.push("/login")
  localStorage.removeItem("token")
  localStorage.removeItem("userinfo")
  router.push("/login")
}
  
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios