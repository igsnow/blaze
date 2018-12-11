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
    @import "~@@/stylus/variable.styl"
    .bl-button
        width: 200px;
        height: 50px;
        text-align: center;
        line-height 50px;
        font-size: $font-size-medium
        color: $btn-color;
        background: $btn-bgc;
</style>
