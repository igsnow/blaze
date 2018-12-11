<template>
    <button class="bl-button" @click="handleClick">按钮</button>
</template>
<script>
    export default {
        name: 'bl-button',
        props: {},
        methods: {
            handleClick() {
            }
        }
    }
</script>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    /*@import "@@/button.styl";*/
    @import "../../../src/styles/components/button.styl"
</style>
