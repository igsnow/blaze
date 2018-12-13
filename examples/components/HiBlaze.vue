<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>
            <bl-button @click="handleClick">按钮</bl-button>
        </p>
        <p>
            <bl-slide></bl-slide>
        </p>

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
