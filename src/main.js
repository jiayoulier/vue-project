
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car')) : []
var store = new Vuex.Store({
    state: {
        car: car
    }, // this.$store.state.
    mutations: {
        addTocar(state, goodsinfo) {

            var flag = false; // 默认在购物车中没有找到对应的商品
            state.car.some(item => {
                if(item.id == goodsinfo.id) {
                    item.count = parseInt(item.count) + parseInt(goodsinfo.count)
                    flag = true
                    return true
                }

            })

            if(!flag) {
                state.car.push(goodsinfo)
            }

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updatedcar(state, goodsinfo) {
            state.car.some(item => {
                if(item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    // console.log(item.count);
                 return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removecar(state,id) {
            state.car.some((item,i) => {
                if(item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updatecarselected(state, info) {
            state.car.some(item => {
                if(item.id == info.id) {
                    item.selected = info.selected
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    }, // this.$store.commit(')
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += parseInt(item.count)
            })
            return c
        },
        getgoodscount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getgoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getgoodscountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if(item.selected) {
                    o.count += parseInt(item.count)
                    o.amount += parseInt(item.price) * item.count
                }
            })
            return o
        }
    } //this.$store.getters.
})

// 导入时间格式化的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function(data, pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(data).format(pattern)
})

import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$http = axios

// 导入bootstrap
// import 'bootstrap/dist/css/bootstrap.css'

// 导入整个mint-ui
import MintUI from 'mint-ui'



import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 按需导入mint-ui

// import { Header, Swipe, SwipeItem, Lazyload } from 'mint-ui'

// Vue.component(Header.name, Header)

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Lazyload)

// 导入缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// import './css/index.css'


// import { Button } from 'mint-ui'

// Vue.component(Button.name, Button)



// import { Toast } from 'mint-ui'

// Vue.component(Toast.name, Toast)


// 导入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import app from './App.vue'


import router from './router.js'


new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app),
    router,
    store
})