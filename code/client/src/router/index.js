import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { getToken } from 'src/utils/auth'
//懒加载，有效降低打包单个文件体积，按需加载
import home from './home/index'//首页路由模块
import login from './login/index'//登陆模块
import register from './register/index'//登陆模块
import taskCenter from './taskCenter/index'//任务中心模块
import userCeneter from './userCeneter/index'//个人中心模块

Vue.use(Router)
let router = new Router({
  routes: [
    ...login,
    ...register,
    ...home,
    ...taskCenter,
    ...userCeneter,
  ]
})
router.beforeEach((to, from, next) => {
  //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
  if (to.path === '/login' || to.path === '/' || to.path === '/register') {
    next()
  } // 如果即将进入登录路由，则直接放行
  else { //进入的不是登录路由
    console.log(to.meta.requiresAuth)
    if (to.meta.requiresAuth) {
      store.dispatch('getUserInfo').then( res => { //拉取用户信息
        next()
      }).catch( err => {
          next('/login')
      })
    }
    //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
    else {
      next()
    }
  } //如果不需要登录验证，或者已经登录成功，则直接放行
})
export default router;
