<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <HelloBlaze msg="Welcome to Blaze"/>
    </div>
</template>

<script>
    import HelloBlaze from './components/HelloBlaze.vue'

    export default {
        name: 'app',
        components: {
            HelloBlaze
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
