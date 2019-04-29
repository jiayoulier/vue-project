

import VueRouter from 'vue-router'


import homeContainer from   './components/homeContainer.vue'

import memberContainer from './components/memberContainer.vue'

import shopcartContainer from './components/shopcartContainer.vue'

import searchContainer from './components/searchContainer.vue'




var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: homeContainer},
        {path: '/member', component: memberContainer},
        {path: '/shopcart', component: shopcartContainer},
        {path: '/search', component: searchContainer}
    ],
    linkActiveClass: 'mui-active'
})

export default router