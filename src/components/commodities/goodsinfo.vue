<template>
    <div class="infoContainer">

        <transition  @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :dataList="lunbo" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ list.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <span class="market_price">&yen;{{ list.market_price }}</span>
                        销售价: <span class="sell_price">&yen;{{ list.sell_price }}</span>
                    </p>
                    <p>
                        购买数量: <numbox @func="getSelectCount" :max="list.stock_quantity"></numbox>
                    </p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品参数: {{ list.goods_no }}</p>
                    <p>库存情况: {{ list.stock_quantity }} 件</p>
                    <p>上架时间: {{ list.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="getdesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="getcomm(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbo: [],
            list: {},
            ballflag: false,
            selectCount: 1
        }
    },
    created() {
        this.getlunbo(),
        this.getdata()
    },
    methods: {
       getlunbo() {
           this.$http.get('/api/getthumimages/'+ this.id).then(res => {
            //    console.log(this.id)
                // console.log(res)
                if(res.status === 200 && res.data.status === 0) {
                    res.data.message.forEach(item => {
                        item.img = item.src
                    }) 
                    this.lunbo = res.data.message

                }
           })
       },
       getdata() {
           this.$http.get('/api/goods/getinfo/'+ this.id).then(res => {
            //    console.log(res.data.message[0])
                if(res.status=== 200 && res.data.status === 0) {
                    this.list = res.data.message[0]
                }
           })
       },
       getdesc(id) {
           this.$router.push({name: 'goodsdesc', params: {id: id}})
       },
       getcomm(id) {
           this.$router.push({name: 'goodscomm', params: {id}})
       },
       addShopcar() {
           this.ballflag = !this.ballflag

            var goodsinfo = {id: this.id, count: this.selectCount, price: this.list.sell_price, selected: true}

            this.$store.commit('addTocar', goodsinfo)
            // console.log(this.$store.state.car)

       },
       beforeEnter(el) {
           el.style.transform = "translate(0,0)"
       },
       enter(el, done) {
           el.offsetWidth

           const ballPosition = this.$refs.ball.getBoundingClientRect()
           const badgePosition = document.getElementById('badge').getBoundingClientRect()

           const x = badgePosition.left - ballPosition.left
           const y = badgePosition.top - ballPosition.top

           el.style.transform = `translate(${x}px, ${y}px)`
           el.style.transition = "all 0.8s cubic-bezier(.4,-0.3,1,.67)"

           done()
       },
       afterEnter(el) {
           this.ballflag = !this.ballflag
       },
       getSelectCount(count) {
        //    console.log('ok')
            this.selectCount = count
            // console.log(count)
       }
    },
    components: {
        swiper,
        numbox
    }
}
</script>


<style lang="less" scoped>
    .infoContainer {
        background-color: #efeff4;
        overflow: hidden;
        .market_price {
            text-decoration: line-through;
            margin-right: 10px;
        }
        .sell_price {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
        .mui-card-footer {
            display: block;
            button {
                margin:15px 0;
            }
        }
        .ball {
            position: absolute;
            top: 409px;
            left: 142px;
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            z-index: 999;
        }
    }
</style>

