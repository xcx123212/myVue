<template>
     <button @click="clickBtn1">按钮 </button>
</template>

<script>
    export default {
        name: "demo",
        methods: {
            clickBtn1() {
                this.$emit('update:title', '测试')
            }
        }
    }
</script>

<style scoped>

</style>