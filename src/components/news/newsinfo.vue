<template>
    <div class="newsinfoContainer">
        <h3>{{ newsInfo.title }}</h3>
        <p>
            <span>发表时间: {{ newsInfo.add_time}}</span>
            <span>点击{{ newsInfo.click }}次</span>
        </p>

        <hr>
        
        <!-- 内容 -->

        <div class="news_content" v-html="newsInfo.content">
           
        </div>

        <!-- 评论子组件 -->
        <comment :id="id"></comment>
    </div>
</template>

<script>
// 导入 评论子组件
import  comment from '../subcomponents/comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    created() {
        this.getNewsinfo();
    },
    methods: {
        getNewsinfo() {
            this.$http.get('/api/getnew/'+ this.id).then(res => {
                // console.log(res);
                if(res.status === 200 && res.data.status === 0) {
                    this.newsInfo = res.data.message[0]
                }
            })
        }
    },
    components: {
        comment
    }
    
}
</script>

<style lang="less" scoped>
    .newsinfoContainer {
        padding: 0 5px;
        h3 {
            color: red;
            text-align: center;
        }
        p {
            display: flex;
            justify-content: space-between;
            color: skyblue;
        }
        .news_content {
            color: #333;
            img {
                width: 100%;
            }
        }
    }
</style>
