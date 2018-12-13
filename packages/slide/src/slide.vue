<template>
    <div class="bl-slide">
        <div class="slide-info"
             :style="styleObj"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd"
        >
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
        props: {},
        data() {
            return {
                startPos: 0,   // 开动滑动位置
                endPos: 0,     // 结束滑动位置
                distanceX: 0,  // 开始到结束滑动的距离
                marginLeft: 0,  //组件margin-left值
                startMarginLeft: 0  //记录开始滑动的marginLeft值，比如当从最左往右滑动时

            }
        },
        computed: {
            styleObj() {
                return {
                    marginLeft: this.marginLeft + 'px'
                }
            }
        },
        methods: {
            handleTouchStart(e) {
                this.startPos = e.touches[0].clientX
                this.startMarginLeft = this.marginLeft
            },
            handleTouchMove(e) {
                this.endPos = e.touches[0].clientX
                this.distanceX = this.startPos - this.endPos
                this.marginLeft = this.startMarginLeft - this.distanceX
                if (this.marginLeft < -130) return
                console.log(this.marginLeft)
            },
            handleTouchEnd() {
                if (this.marginLeft > -60) {
                    this.marginLeft = 0       //组件折置
                } else {
                    this.marginLeft = -130    //组件展开，滑到最左边
                }
            }
        }
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
            width: 50px
            background: $color-default

        .slide-read, .slide-del
            & > span
                /**将文字容器宽度设置为0，容器中的文字可以缩放*/
                width: 0
                text-align: center
                line-height: 50px
                margin-left: 5%
                white-space: nowrap
                color: $color-white


</style>
