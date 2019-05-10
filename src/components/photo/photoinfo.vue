<template>
    <div class="photoinfoContainer">
        <h3>{{ photoinfo.title }}</h3>
        <div class="title">
            <span>发表时间: {{photoinfo.add_time | dateFormat}} </span>
            <span>点击{{ photoinfo.click }}次</span>
        </div>
        <hr>

        <!-- 缩略图区域 -->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!-- 图片内容 -->
        <div class="img_content" v-html="photoinfo.content">

        </div>

        <!-- 评论子组件 -->
        <comments :id="id"></comments>
    </div>
</template>

<script>
// 导入评论组件
import comments from  '../subcomponents/comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo: {},
            slide1: []
        }
    },
    created(){
        this.getPhotoInfo(),
        this.handleClose()
    },
    methods: {
        getPhotoInfo() {
            this.$http.get('/api/getimageInfo/' + this.id).then(res => {
                // console.log(res)
                if(res.status === 200 || res.data.status === 0) {
                    this.photoinfo = res.data.message[0]
                }
            })
        },
        handleClose() {
            this.$http.get('/api/getthumimages/' + this.id).then(res => {
                // console.log(res)
                if(res.status === 200 && res.data.status === 0) {
                    res.data.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        item.msrc = item.src
                    })
                    this.slide1 = res.data.message;
                }

            })
        }
    },
    components: {
        comments
    }
}
</script>


<style lang="less">
    .photoinfoContainer {
        h3 {
            height: 30px;
            line-height: 30px;
            color: skyblue;
            font-size: 15px;
            text-align: center;
        }
        .title {
            font-size: 12px;
            color: #333;
            display: flex;
            justify-content: space-between;
        }

        .img_content {
            text-indent: 2em;
            font-size: 13px;
            line-height: 25px;
        }

        

    }

    .my-gallery {
            figure {
                display: inline-block;
                margin:  0 10px ;
                padding: 0;
            }
            img {
                width: 100px;
                height: 100px;
            }
        }
</style>
