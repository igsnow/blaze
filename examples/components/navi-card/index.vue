<template>
    <div class="navi-card">
        <img class="navi-icon" :src="icon"/>
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .navi-card
        width: 165px
        height: 120px
        background: rgba(255, 255, 255, 1)
        box-shadow: 0 4px 10px 0 rgba(9, 36, 66, 0.04)
        border-radius: 4px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        font-size: 14px
        font-weight: 400
        color: rgba(89, 108, 142, 1)
        line-height: 20px
        margin-top: 15px

        .navi-icon
            width: 33px
            height: 33px
            margin-bottom: 17px
</style>
