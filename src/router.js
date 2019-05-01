

import VueRouter from 'vue-router'


import homeContainer from   './components/homeContainer.vue'

import memberContainer from './components/memberContainer.vue'

import shopcartContainer from './components/shopcartContainer.vue'

import searchContainer from './components/searchContainer.vue'

import newList from './components/news/newList.vue'

import newsinfo from './components/news/newsinfo.vue'

import photolist from './components/photo/photolist.vue'



var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: homeContainer},
        {path: '/member', component: memberContainer},
        {path: '/shopcart', component: shopcartContainer},
        {path: '/search', component: searchContainer},
        {path: '/home/newList', component: newList},
        {path: '/home/newList/newsinfo/:id', component: newsinfo},
        {path: '/home/photolist', component: photolist}
    ],
    linkActiveClass: 'mui-active'
})

export default router