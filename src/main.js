
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入时间格式化的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function(data, pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(data).format(pattern)
})

import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

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


var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app),
    router
})