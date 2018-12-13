<template>
    <div>
        <h2>{{ msg }}</h2>
        <bl-button @click="handleClick">按钮</bl-button>
    </div>
</template>

<script>
    export default {
        name: 'HiBlaze',
        props: {
            msg: String
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
