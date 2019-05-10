<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" v-model="idcount" ref="numbox" @change="countChange" readonly>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>


<script>

import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {
        }
    },
    methods: {
         countChange() {
        //    console.log(this.$refs.numbox.value)
                // console.log(this.id)
           this.$store.commit('updatedcar', {id: this.id, count: this.$refs.numbox.value})
        }
    },
    mounted() {
        mui('.mui-numbox').numbox()
       
    },
    props: ['idcount', 'id']
}
</script>


<style lang="less" scoped>

</style>

