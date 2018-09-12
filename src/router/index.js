import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import xuyong from '@/components/xuyong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('../components/HelloWorld')
    },
    {
      path: '/xuyong:id',
      component: xuyong
    }
  ]
})
