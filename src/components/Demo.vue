<template>
     <button @click="clickBtn1" v-if="show">按钮 </button>
</template>

<script>
     export default {
          name: "demo",
          props:['show'],
          methods: {
               clickBtn1() {
                    this.$emit('update:show', false)
               }
          }
     }
</script>

<style scoped>

</style>