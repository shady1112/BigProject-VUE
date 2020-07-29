// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'//从node_modules里边把vue-resource引入进来，同引入vue文件和引入vue-router一个道理
import VueMeta from 'vue-meta'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueMeta)
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueResource)

//这样以后，就可以在任何组件页面中使用http了
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,//引用router
  template: '<App/>',
  components: { App }
})

