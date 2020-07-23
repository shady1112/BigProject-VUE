import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({

    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/index'),
        },
        {
            path: '/bookSort', // 用户
            name: 'bookSort',
            component: () => import('@/views/bookSort'),
        },
        {
            path: '/homePage', // 用户
            name: 'homePage',
            component: () => import('@/views/homePage'),
        },



    ]
})
