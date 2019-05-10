<template>
    <div class="shopcarContainer">
        <div class="goods_list">
            <div class="mui-card" v-for="(item,i) in list" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getgoodsSelected[item.id]"
                        @change="changeSelected(item.id, $store.getters.getgoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span>&yen;{{ item.sell_price }}</span>
                                <numbox2 :idcount="$store.getters.getgoodscount[item.id]" :id="item.id"></numbox2>
                                <a href="javascript:;" @click.prevent="remove(item.id, i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="goods_account">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计(不含运费)</p>
                            <p>已勾选商品  <span>{{$store.getters.getgoodscountAndAmount.count}}</span>  件, 总价 <span>&yen;{{$store.getters.getgoodscountAndAmount.amount}}</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
</template>


<script>
import numbox2 from './subcomponents/numbox2.vue'
export default {
    components: {
        numbox2
    },
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getshopcarlist()
    },
    methods: {
        getshopcarlist() {
            var idArr = [];
            this.$store.state.car.forEach(item => {
                idArr.push(item.id)
            })
            if(idArr.length < 1) {
                return
            }
            this.$http.get('/api/goods/getshopcarlist/' + idArr.join(',')).then(res => {
                // console.log(res)
                if(res.data.status === 0 && res.status === 200) {
                    this.list = res.data.message
                }
            })
        },
        remove(id, i) {
            this.list.splice(i, 1);
            this.$store.commit('removecar', id)
        },
        changeSelected(id, val) {
            // console.log(id + '---'  + val)
            this.$store.commit('updatecarselected', {id: id, selected: val})
        }
    }
}
</script>

<style lang="less" scoped>
    .shopcarContainer {
        background-color: #eee;
        overflow: hidden;
        .mui-card-content-inner {
            display: flex;
            align-items: center;
            img {
                width: 60px;
                height: 60px;
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                 h1 {
                font-size: 12px;
                }
                p {
                    span {
                        color: red;
                        font-weight: bold;
                    }
                }
            }
           
        }
        .jiesuan {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
</style>

