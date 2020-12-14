<template>
    <div>~~~~~~我是弟弟~~~~{{msg2}}</div>
</template>
<script>
    import bus from "../../static/js/eventBus";
    export default {
        data() {
            return {
                msg2: 'world'
            }
        },
        mounted() {
            let that = this
            bus.$on('change', function (val) {
                that.msg2 = val + ' world'
                console.log(that.msg2, 11111)
            })
        },
        methods: {
           
        }
    }
</script>