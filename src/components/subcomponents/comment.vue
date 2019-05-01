<template>
    <div class="cmtContainer">
        <h3>发表评论</h3>
        <hr>

        <textarea placeholder="请输入要BB的内容(不超过120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i + 1}}楼 用户: {{ item.user_name}} 发表时间: {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-content">
                    {{ (item.content === '') ? '此用户很懒,啥也没说' : item.content }}
                </div>
            </div>
            <mt-button type="danger" size="large" plain @click="getMoreCmts">加载更多</mt-button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            pageindex: 1,
            comments: []
        }
    },
    created() {
        this.getCmts()
    },
    methods: {
        getCmts() {
            // console.log(this.id)
            this.$http.get('/api/getcomments/'+ this.id + "?pageindex=" + this.pageindex).then(res => {
                // console.log(res)
                if(res.status=== 200 && res.data.status=== 0) {
                    // this.comments = res.data.message
                    this.comments = this.comments.concat(res.data.message)
                }
            })
        },
        getMoreCmts() {
            this.pageindex ++;
            this.getCmts()
        }
    },
    props: ['id']
    
}
</script>


<style lang="less" scoped>
    .cmtContainer {
        h3 {
            font-size: 14px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin-bottom: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 12px;
                .cmt-title {
                    background-color: #ccc;
                    line-height: 30px;;
                }
                .cmt-content {
                    text-indent: 2em;
                    line-height: 35px;
                }
            }
        }
    }

</style>
