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
        padding-bottom: 30px
        background: #f7f7f7

        .header
            width: 375px
            height: 114px
            font-size: 14px
            font-weight: 300
            color: rgba(255, 255, 255, 1)
            line-height: 18px
            /*background: #3683d6*/
            border-radius: 0 0 10px 10px
            box-shadow: 0 4px 20px 0 rgba(0, 49, 107, 0.3)
            box-sizing: border-box

            .header-bg
                position: absolute
                top: 0
                left: 0
                width: 375px
                height: 114px
                z-index: 1

            .header-desc
                position: absolute
                z-index: 2
                font-size: 14px
                margin: 30px 0 0 30px
                line-height: 24px

                .header-name
                    font-size: 16px


        .main
            display: flex
            flex-wrap: wrap
            width: 345px
            margin: 0 auto
            flex-direction: row
            justify-content: space-between
</style>
