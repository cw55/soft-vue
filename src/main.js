// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import resource from './resource';//通过import引入
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap,{
  ak: 'YgAyCARY6DiPZl5DLryosIlABbsRDO6a'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,//通过import引入，然后在这里调用
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  // 此处判断条件我有看到其他人用to.matched.length ===0进行判断， 具体的还有待进一步验证，大体的思路就是这样的
  if (to.fullPath === '/') { 
      from.name ? next({ name:from.name }) : next('/helloworld');   
  } else {
      next(); //如果匹配到正确跳转
  }
});
