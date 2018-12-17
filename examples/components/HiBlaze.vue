<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>
            <bl-button @click="handleClick">按钮</bl-button>
        </p>
        <p>
            <bl-slide></bl-slide>
        </p>
        <p>
            <bl-zoom
                    src="http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg"
                    width="450" height="250"
                    bigsrc="http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg"
                    :configs="configs">
            </bl-zoom>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'HiBlaze',
        props: {
            msg: String
        },
        data() {
            return {
                configs: {
                    width: 650,
                    height: 350,
                    maskWidth: 100,
                    maskHeight: 100,
                    maskColor: 'red',
                    maskOpacity: 0.2
                }
            }
        },
        methods: {
            handleClick() {
                window.console.log('点击')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
