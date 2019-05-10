<template>
    <div>
        <comments :id="id"></comments>
    </div>
</template>

<script>
    import comments from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methdos: {

    },
    components: {
        comments
    }
}
</script>


<style lang="less" scoped>

</style>

