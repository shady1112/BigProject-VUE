import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({

    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/index'),
            meta:{
                // 页面标题title
                title: '登录页'
            }
        },

        {
            path: '/homePage', // 用户
            name: 'homePage',
            component: () => import('@/views/homePage'),
        },

        {
            path: '/CreateOffer', // 用户
            name: 'CreateOffer',
            component: () => import('@/views/CreateOffer'),
        },



    ]
})
