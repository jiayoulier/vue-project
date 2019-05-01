<template>
    <div class="app-container">
        <mt-header fixed title="加油立儿--vue" class="app_header"></mt-header>

        <transition>
            <router-view></router-view>
        </transition>
        <!-- <mt-button plain @click="show">plain</mt-button> -->
        <!-- 底部导航 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item-1" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item-1" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
            <router-link to="/shopcart" class="mui-tab-item-1" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item-1" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
// import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            // msg: '123'
        }
    },
    methods: {
        // show() {
        //     // Toast('提示信息');
        //     // Toast({
        //     //     message: '提示',
        //     //     position: 'bottom',
        //     //     duration: -1,
        //     //     iconClass: 'glyphicon glyphicon-ok',
        //     //     className: 'toast'
        //     // });
        // }
    }
}
</script>

<style lang="less" scoped>
    .app_header {
        z-index: 1000;
    }
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;

    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
    .mui-bar-tab .mui-tab-item-1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

