<template>
    <div>
         <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in dataList" :key="item.id">
                <img :src="item.img" alt="" :class="{full: isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ['dataList', 'isfull']
}
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
         .mint-swipe-item {
             text-align: center;
            > img {
                vertical-align: middle;
                height: 100%;
            }
        }
        .full {
            width: 100%;
        }
    }
</style>
