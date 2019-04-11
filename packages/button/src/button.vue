<template>
    <div>11111</div>
</template>
<script>
    const COMPONENT_NAME = 'bl-button'
    export default {
        name: COMPONENT_NAME,
        props: {
            name: {
                type: String,
                default: 'blaze'
            },
            type: {
                type: String,
                default: 'default'
            },
            plain: Boolean,
            size: {
                type: String,
                value: 'medium',
            },
            shape: {
                type: String,
                value: 'circle',
            },
            disabled: {
                type: Boolean,
                value: false,
            },
            special: {
                type: Boolean,
                value: false,
            },
            loading: {
                type: Boolean,
                value: false,
            }
        },
        methods: {
            handleClick(event) {
                if (this.disabled) {
                    event.preventDefault()
                    event.stopPropagation()
                    return
                }
                this.$emit('click', event)
            }
        }
    }
</script>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "~@@/stylus/variable.styl"

    btn-active($bg)
    &.bl-btn_active, &:active
        background: $bg

    .bl-btn
        display: block
        margin: 0
        padding: 17px 16px
        width: 100%
        text-align: center
        white-space: nowrap
        cursor: pointer
        font-size: $font-size-large
        line-height: 1
        color: $btn-color
        background: $btn-bgc
        outline: none
        border: none
        border-radius: 2px
        box-sizing: border-box
        -webkit-tap-highlight-color: transparent
        btn-active($btn-bgc-active)

        > i
            display: inline-block
            margin-right: 4px
            font-size: 100%
            transform: scale(1.13)
            transform-origin: right center

    .bl-btn-inline
        width: auto
        display: inline-block
        vertical-align: middle
        padding: 9px 10px
        font-size: $font-size-small

        > i
            margin-right: 2px
            transform: scale(1.14)

    .bl-btn_disabled
        color: $btn-disabled-color
        background: $btn-disabled-bgc
        btn-active($btn-disabled-bgc, $btn-disabled-bdc)

    .bl-btn_medium
        padding: 14px 13px

    .bl-btn_small
        padding: 11px 10px

    .bl-btn_mini
        padding: 8px 7px


</style>
