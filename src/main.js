
import Vue from 'vue'

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// 导入整个mint-ui
// import MintUI from 'mint-ui'

// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)

// 按需导入mint-ui

import { Header } from 'mint-ui'

Vue.component(Header.name, Header)


// import './css/index.css'


// import { Button } from 'mint-ui'

// Vue.component(Button.name, Button)



// import { Toast } from 'mint-ui'

// Vue.component(Toast.name, Toast)


// 导入mui
import './lib/mui/css/mui.css'

import app from './App.vue'


var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app)
})