<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox"/>
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
            // console.log(this)
            // console.log(this.$refs);
            // console.log(this.$refs.numbox);
            // console.log(this.$refs.numbox.value)
            this.$emit('func', this.$refs.numbox.value)
        }
    },
    mounted() {
        mui('.mui-numbox').numbox()
       
    },
    props: ['max'],
    watch: {
        max: function(newData, oldData) {
            mui('.mui-numbox').numbox().setOption( 'max' ,newData)
        }
    }
}
</script>


<style lang="less" scoped>

</style>

