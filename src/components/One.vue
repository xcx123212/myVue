<template>
    <div>~~~~~~我是哥哥~~~~{{msg}} <button @click='fn'>点击</button></div>
</template>
<script>
    import bus from "../../static/js/eventBus";
    export default {
        data() {
            return {
                msg: 'hello'
            }
        },
        methods: {
            fn() {
                bus.$emit('change', this.msg)
            }
        }
    }
</script>