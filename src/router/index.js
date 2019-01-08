import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import company from '@/components/company'
import success from '@/components/success'
import map from '@/components/map'
import product from '@/components/product'
import news from '@/components/news'
import producta from '@/components/children/producta'
import productb from '@/components/children/productb'
import productc from '@/components/children/productc'
import productd from '@/components/children/productd'
import contact from '@/components/contact'
import contact_show from '@/components/contact_show'
import demo from '@/components/demo'
import demo1 from '@/components/demo1'
import $ from 'jquery'
Vue.use(Router)

export default new Router({
  mode: 'history',//url去掉了#
  routes: [
    {
      path: '/',
      redirect:'/helloworld'
    },
    {
      path: '/helloworld',
      name: 'home',
      title: '首页',
      component: home
    }
    ,{
      path: '/company',
      name: 'company',
      component: company
    }
    ,{
      path: '/success',
      name: 'success',
      component: success
    },
    ,{
      path: '/map',
      name: 'map',
      component: map
    },
    ,{
      path: '/product',
      // name: 'product',
      component: product,
      children:[
        {
          path:'/',
          name: 'product',
          component: producta,
        },
        {
          path:'a',
          name: 'producta',
          component: producta,
        },
        {
          path:'b',
          name: 'productb',
          component: productb,
        },
        {
          path:'c',
          name: 'productc',
          component: productc,
        },
        {
          path:'d',
          name: 'productd',
          component: productd,
        },
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/contact',//留言板
      name: 'contact',
      component: contact
    },
    {
      path: '/contact_show',//留言板具体展示
      name: 'contact_show',
      component: contact_show
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    // {
    //   path: '*',  //*号表示匹配任意内容
    //   title: '错误页返回首页',
    //   redirect: '/helloworld'
    // }
  ]
});

