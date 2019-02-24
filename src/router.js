import Vue from 'vue'
import Router from 'vue-router'
import login from './pages/login'
import home from './pages/home'
import alllist from './pages/home/childred/alllist'
import wuhanlist from './pages/home/childred/wuhanlist'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
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
