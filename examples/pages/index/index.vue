<template>
    <div class="container">
        <div class="header">
            <img class="header-bg" src="../../images/static/index_bg.png"></img>
            <span class="header-desc"><span class="header-name">Blaze UI </span>VueJS移动端组件库</span>
        </div>
        <div class="main">
            <navi-card
                    v-for="(item,index) in naviConfigs.baseConfig"
                    :key="index"
                    :icon="item.icon"
                    :title="item.title"
            >
            </navi-card>
        </div>
    </div>
</template>

<script>
    import naviCard from '@/components/navi-card/index'
    import naviConfigs from '@/config/navi'

    export default {
        name: "index",
        data() {
            return {
                naviConfigs: naviConfigs
            }
        },
        components: {
            naviCard
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        width: 100%
        min-height: 100vh
        padding-bottom: 60px
        background: #f7f7f7

        .header
            width: 750px
            height: 228px
            font-size: 28px
            font-weight: 300
            color: rgba(255, 255, 255, 1)
            line-height: 36px
            /*background: #3683d6*/
            border-radius: 0 0 20px 20px
            box-shadow: 0 4px 20px 0 rgba(0, 49, 107, 0.3)
            box-sizing: border-box

            .header-bg
                position: absolute
                top: 0
                left: 0
                width: 750px
                height: 228px
                z-index: 1

            .header-desc
                position: absolute
                z-index: 2
                font-size: 28px
                margin: 60px 0 0 60px
                line-height: 48px

                .header-name
                    font-size: 32px


        .main
            display: flex
            flex-wrap: wrap
            width: 690px
            margin: 0 auto
            flex-direction: row
            justify-content: space-between
</style>
