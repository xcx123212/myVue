import * as types from '../store/mutations-type'
export default {

    data() {
      return {

      }
    },
    filters: {
        filterMsg(value) {
            return value + '，cs'
        }
    },
    methods: {
        getMsg(event) {
            // window.confirm('cscscs')
            // console.log(event.target.tagName) 打印组件名称
            this.$refs.gray.style.color= '#5ea9f5'
        },
        handelMsg() {
            return '第一个vue（表达式中调用方法)'
        },

        clickMe(event) {
            this.$store.commit(types.HANDEL_COUNT, event.target.tagName)
        },

        clickPlus(event) {
            this.$store.commit(types.HANDEL_COUNT_NEW, event.target.tagName)
        }
    }
}