<template>
    <div class="container">
        <div class="header">
            <image class="header-bg" src="/images/static/index_bg.png"></image>
            <span class="header-desc"><span class="header-name">Blaze UI</span>移动端组件库</span>
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

</style>
