<template>
    <div class="bl-slide">
        <div class="slide-info">
            信息详情
        </div>
        <div class="slide-read">
            <span>标为已读</span>
        </div>
        <div class="slide-del">
            <span>删除</span>
        </div>
    </div>
</template>

<script>
    const COMPONENT_NAME = 'bl-slide'
    export default {
        name: COMPONENT_NAME,
        props: {}
    }
</script>

<style rel="stylesheet/stylus" lang="stylus">
    @import "~@@/stylus/variable.styl"
    .bl-slide
        display: flex
        width: 100%
        height: 50px
        line-height: 50px
        overflow: hidden
        border-top: 1px solid $color-light-grey-s
        border-bottom: 1px solid $color-light-grey-s

        .slide-info
            width: 100%
            /**将左侧的信息栏flex属性设置为0，不会随空间变化进行缩放*/
            flex-shrink: 0


        .slide-read
            display: flex
            width: 80px
            background: $color-light-grey-s


        .slide-del
            display: flex
            width: 40px
            background: $color-default

        .slide-read, .slide-del
            & > span
                /**将文字容器宽度设置为0，容器中的文字可以缩放*/
                width: 0
                line-height: 50px
                margin-left: 5%
                white-space: nowrap
                color: $color-white


</style>
