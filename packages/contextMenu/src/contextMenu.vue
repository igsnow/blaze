<template>
    <div class="bl-context-menu">
        <bl-button>
            {{title}}
        </bl-button>
        <ul>
            <li v-for="(item, index) in list">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import BlButton from '../../button/src/button'

    const COMPONENT_NAME = 'bl-context-menu'
    export default {
        name: COMPONENT_NAME,
        props: {
            title: {
                type: String,
                default: '右击'
            },
            list: {
                type: Array,
                default: [
                    '刷新',
                    '关闭',
                    '关闭所有'
                ]
            }
        },
        methods: {},
        components: {
            BlButton
        }
    }
</script>

<style scoped>

</style>