<template>
    <button
            class="bl-btn"
            :type="type"
            :class="btnClass"
            @click="handleClick">
        <i :class="icon" v-if="icon"></i>
        <slot></slot>
    </button>
</template>
<script>
    const COMPONENT_NAME = 'bl-button'
    export default {
        name: COMPONENT_NAME,
        props: {
            icon: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            primary: {
                type: Boolean,
                default: false
            },
            outline: {
                type: Boolean,
                default: false
            },
            light: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'button'
            }
        },
        computed: {
            btnClass() {
                return {
                    'bl-btn_active': this.active,
                    'bl-btn_disabled': this.disabled,
                    'bl-btn-inline': this.inline,
                    'bl-btn-primary': this.primary,
                    'bl-btn-outline': this.outline,
                    'bl-btn-outline-primary': this.outline && this.primary,
                    'bl-btn-light': this.light
                }
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
<style rel="stylesheet/stylus" lang="stylus">
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
        btn-active($btn-active-bgc)

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

    .bl-btn-primary
        color: $btn-primary-color
        background: $btn-primary-bgc
        btn-active($btn-primary-active-bgc)

    .bl-btn-light
        color: $btn-light-color
        background: $btn-light-bgc
        btn-active($btn-light-active-bgc)

    .bl-btn-outline
        color: $btn-outline-color
        background: $btn-outline-bgc
        btn-active($btn-outline-active-bgc, $btn-outline-active-bdc)

    .bl-btn-outline-primary
        color: $btn-outline-primary-color
        background: $btn-outline-primary-bgc
        btn-active($btn-outline-primary-active-bgc, $btn-outline-primary-active-bdc)

    .bl-btn_disabled
        color: $btn-disabled-color
        background: $btn-disabled-bgc
        btn-active($btn-disabled-bgc, $btn-disabled-bdc)
</style>
