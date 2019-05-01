<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newList/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<strong>{{ item.title }}</strong>
							<p class='mui-ellipsis'>
                                <span>发表时间: {{ item.add_time | dateFormat('YYYY-MM-DD') }}</span>
                                <span>点击: {{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            newslist: []
        }
    },
    created() {
        this.getnewslist()
    },
    methods: {
        getnewslist() {
            this.$http.get('/api/getnewslist').then(res => {
                // console.log(res)
                if(res.status === 200 && res.data.status === 0) {
                    this.newslist = res.data.message
                } else {
                    Toast('获取数据失败')
                }
            })
        }
    }
    
}
</script>


<style lang="less" scoped>
    .mui-table-view {
        li {
            strong {
                font-size: 14px;
            }
            .mui-ellipsis {
                color: skyblue;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>

