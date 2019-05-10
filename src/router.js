

import VueRouter from 'vue-router'


import homeContainer from   './components/homeContainer.vue'

import memberContainer from './components/memberContainer.vue'

import shopcartContainer from './components/shopcartContainer.vue'

import searchContainer from './components/searchContainer.vue'

import newList from './components/news/newList.vue'

import newsinfo from './components/news/newsinfo.vue'

import photolist from './components/photo/photolist.vue'

import photoinfo from './components/photo/photoinfo.vue'

import commodity from './components/commodities/commoditylist.vue'

import goodsinfo from './components/commodities/goodsinfo.vue'

import goodsdesc from './components/commodities/goodsdesc.vue'

import goodscomm from './components/commodities/goodscomm.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: homeContainer},
        {path: '/member', component: memberContainer},
        {path: '/shopcart', component: shopcartContainer},
        {path: '/search', component: searchContainer},
        {path: '/home/newList', component: newList},
        {path: '/home/newList/newsinfo/:id', component: newsinfo},
        {path: '/home/photolist', component: photolist},
        {path: '/home/photolist/photoinfo/:id', component: photoinfo},
        {path: '/home/commoditylist', component: commodity},
        {path: '/home/commoditylist/goodsinfo/:id', component: goodsinfo, name: 'goodsinfo'},
        {path: '/home/goodsdesc/:id', component:  goodsdesc, name: 'goodsdesc'},
        {path: '/home/goodscomm/:id', component: goodscomm, name: 'goodscomm'}
    ],
    linkActiveClass: 'mui-active'
})

export default router