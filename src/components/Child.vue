<template>
    <div class="btn">
        <a>{{text || '按钮'}}</a><br>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "child",
        props: ["text"],
        data() {
            return {
                msg: '点击按钮了'
            }
        },
        methods : {
            // getText() {
            //     this.$emit("message", this.msg)
            // }
        }
    }
</script>

<style scoped>

</style>