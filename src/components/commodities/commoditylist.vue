<template>
    <!-- <div class="goodsContainer">
        <router-link tag="div" class="goodsContainer_item" v-for="item in list" :key="item.id" :to="'/home/commoditylist/goodsinfo/'+item.id ">
            <img :src="item.img_url" alt="">
            <h1>{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="newPrice">&yen;{{ item.sell_price }}</span>
                    <span class="oldPrice">&yen;{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
    </div> -->

    <div class="goodsContainer">
        <div class="goodsContainer_item" v-for="item in list" :key="item.id" @click="getDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1>{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="newPrice">&yen;{{ item.sell_price }}</span>
                    <span class="oldPrice">&yen;{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageindex:  1,
            list: []
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList() {
            this.$http.get('/api/getgoods?pageindex=' + this.pageindex).then(res => {
                // console.log(res)
                if(res.status === 200 && res.data.status === 0) {
                    // this.list = res.data.message
                    // console.log(this.list)
                    this.list = this.list.concat(res.data.message)
                }
            })
        },
        getmore() {
            this.pageindex++;
            this.getGoodsList()
        },
        getDetail(id) {
            // console.log(this)
            // this.$router.push('/home/commoditylist/goodsinfo/'+ id)

            // this.$router.push({path: '/home/commoditylist/goodsinfo/'+ id})

            this.$router.push({name: 'goodsinfo', params: {id: id}})
        }
    }
    
}
</script>


<style lang="less" scoped>
    .goodsContainer {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;
        .goodsContainer_item {
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            width: 49%;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
                vertical-align: middle;
            }
            h1 {
                font-size: 14px;
            }
            .info {
                background-color: #eee;
                padding: 5px;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .newPrice {
                    color: red;
                    margin-right: 10px;
                    font-weight: bold;
                }
                .oldPrice {
                    font-size: 12px;
                    text-decoration: line-through;
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                }
            }
        }
    }
</style>
