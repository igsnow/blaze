<template>
    <div>
        <h2>{{ msg }}</h2>
        <bl-button>agree</bl-button>
    </div>
</template>

<script>
    export default {
        name: 'HiBlaze',
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
