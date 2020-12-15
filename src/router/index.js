import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      // webpack动态import语法
      component: () => import('@/pages/Index')
    },
    {
      path: '/',
      name: 'login',
      // webpack动态import语法
      component: ()=>import('@/pages/Login')
    },
    {
      path: '/home',
      name: 'home',
      // webpack动态import语法
      component: ()=>import('@/pages/Home')
    }
  ]
})
