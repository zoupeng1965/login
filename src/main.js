import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
console.log(666)
console.log(1666)
// 引入axios
import "./api/index.js"


// 模块化开发可以抽离到api里面
// import axios from "axios";

// // 将Axios挂载到Vue的原型中
// Vue.prototype.$http=axios;
// // axios配置
// axios.defaults.baseURL = 'http://litc.pro:9999/v1/';
// axios.defaults.withCredentials = true;

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   // 添加token的heaaers头
//   let token = localStorage.getItem("token") || "";
//   config.headers.Authorization = token
//   return config;
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   response=response.data
//   return response;
// }, function (error) {
//   // console.log(error.response.data.status,222)
//   // console.dir(this)
//   // console.dir(Vue,55)
//   // console.log(router,44)
//   Vue.prototype.$message({
//     showClose: true,
//     message: error.response.data.errMsg,
//   })
// if(error.response.data.status==401){
//   // console.log(router,44)
//   // 问老师
//   // Vue.prototype.push("/login")
//   localStorage.removeItem("token")
//   localStorage.removeItem("userinfo")
//   router.push("/login")
// }
  
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });




// 导航守卫效果看起来很像使用watch监视路由的变化
// 但是区别在于: watch是监视路由的变化, 无法阻止路由的导航
// 导航守卫是专门用来进行拦截导航或者新建导航等操作
// router.beforeEach((to, from, next) => {
//   let token=localStorage.getItem("token")||""

// // 拦截已登录的状态
//   if(token&&to.path=="/login"){
//       return next("/home/alllist")
//   }
//   // 拦截未登录的状态
//   // 判断token是否存在
//   // 存在表示已登录
//   // 判断如果用户登录了就正常导航
//   // 登录页面也不能进行拦截, 应当放行
//   if(token||to.path=="/login"||to.path=="/singup"){
//     next()
//   }else{
//     next("/")
//   }
// })
// 模块化开发放到router.js


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
