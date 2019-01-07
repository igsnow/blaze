<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>
            <bl-button
                    @click="handleClick"
            >
                按钮
            </bl-button>
        </p>
        <p>
            <bl-slide></bl-slide>
        </p>
        <p>
            <bl-context-menu
                    :title="contextMenuTitle"
                    :list="contextMenuList"
            ></bl-context-menu>
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
                contextMenuTitle: '右键点击',
                contextMenuList: ['右击刷新', '右击关闭', '右击关闭所有']
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
