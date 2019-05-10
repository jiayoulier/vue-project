<template>
    <div>

        <!-- 轮播图 -->
        <swiper :dataList="dataList" :isfull="true"></swiper>
        <!-- 六宫格 -->

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                    <img src="../images/menu1(1).png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <img src="../images/menu2.png" alt="">                    
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/commoditylist">
                    <img src="../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 

    </div>
</template>


<script>
import { Toast } from  'mint-ui'
import swiper from './subcomponents/swiper.vue'
export default {
    data() {
        return {
            dataList: []
        }
    },
    created() {
        this.getLunboList();
    },
    methods: {
        getLunboList() {
            this.$http.get('/api/getlunbo').then(res => {
                // console.log(res)
                if(res.status === 200 && res.data.status === 0) {
                    this.dataList = res.data.message
                } else {
                    Toast('获取数据失败')
                }
            })
        }
    },
    components: {
        swiper
    }
    
}
</script>

<style lang="less" scoped>

    

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        .mui-media {
            width: 33.33%;
            border: 0;
             img {
                 vertical-align: middle;
                 width: 60px;
                 height: 60px;
             }
             .mui-media-body {
                 font-size: 14px;
             }
        }
    }

</style>

