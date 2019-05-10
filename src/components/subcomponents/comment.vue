<template>
    <div class="cmtContainer">
        <h3>发表评论</h3>
        <hr>

        <textarea placeholder="请输入要BB的内容(不超过120字)" maxlength="120" v-model="cmt"></textarea>
        <mt-button type="primary" size="large" @click="add_cmt">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i + 1}}楼 用户: {{ item.user_name}} 发表时间: {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-content">
                    {{ item.content === 'undefined' ? '此用户很懒,啥也没说' : item.content }}
                </div>
            </div>
            <mt-button type="danger" size="large" plain @click="getMoreCmts">加载更多</mt-button>
        </div>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            pageindex: 1,
            comments: [],
            cmt: ''
        }
    },
    created() {
        this.getCmts()
    },
    methods: {
        getCmts() {
            // console.log(this.$route.params.id)
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
        },
        add_cmt() {
            if(this.cmt.trim() === '') {
                return Toast('评论内容不能为空!')
            }
            this.$http.post('/api/postcomment/' + this.$route.params.id, {content: this.cmt} ).then(res => {
                // console.log(res)
                if(res.status=== 200 || res.data.status=== 0) {
                    var cmt = {user_name: '匿名用户', add_time: Date.now(), content: this.cmt.trim()}
                    this.comments.unshift(cmt)
                    this.cmt = ''
                }
            })
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
