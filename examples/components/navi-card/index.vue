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
        width: 330px
        height: 240px
        background: rgba(255, 255, 255, 1)
        box-shadow: 0 8px 20px 0 rgba(9, 36, 66, 0.04)
        border-radius: 8px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        font-size: 28px
        font-weight: 400
        color: rgba(89, 108, 142, 1)
        line-height: 40px
        margin-top: 30px

        .navi-icon
            width: 66px
            height: 66px
            margin-bottom: 34px
</style>
