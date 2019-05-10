<template>
    <div class="descContainer">
        <div class="title">{{ desc.title }}</div>
        <hr>
        <div class="content" v-html="desc.content"></div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            desc: {}
        }
    },
    created() {
        this.getgoodsdesc()
    },
    methods: {
        getgoodsdesc() {
            this.$http.get('/api/goods/getdesc/' + this.id ).then( res => {
                console.log(res)
                if(res.status === 200 && res.data.status === 0) {
                    this.desc = res.data.message[0]
                }
            })
        }
    }
}
</script>


<style lang="less" scoped>
    .descContainer {
        padding: 4px;
        .title {
            color: skyblue;
            font-size: 16px;
            text-align: center;
            padding: 10px;
        }
    }
</style>

