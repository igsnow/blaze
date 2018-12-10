<template>
    <div>
        <h1>{{ msg }}</h1>
        <BlButton></BlButton>
    </div>
</template>

<script>
    export default {
        name: 'HelloBlaze',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px;
    }
</style>
