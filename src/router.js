import Vue from 'vue'
import Router from 'vue-router'
import login from './pages/login'
import singup from './pages/singup'
import home from './pages/home'
import alllist from './pages/home/childred/alllist'
import wuhanlist from './pages/home/childred/wuhanlist'

Vue.use(Router)


let router =new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/singup', component: singup },
    {
      path: '/home',
      component: home,
      children:[
        { path: 'alllist', component: alllist },
        { path: 'wuhanlist', component: wuhanlist },
      ]
    },


  ]
})

router.beforeEach((to, from, next) => {
  let token=localStorage.getItem("token")||""

// 拦截已登录的状态
  if(token&&to.path=="/login"){
      return next("/home/alllist")
  }
  // 拦截未登录的状态
  // 判断token是否存在
  // 存在表示已登录
  // 判断如果用户登录了就正常导航
  // 登录页面也不能进行拦截, 应当放行
  if(token||to.path=="/login"||to.path=="/singup"){
    next()
  }else{
    next("/")
  }
})


export default router
