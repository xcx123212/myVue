<template>
   <div class="msg">
       <child @click.native="getMsg" text="点我看看">这是插槽功能</child>
       <router-link to="/HelloWorld">跳转方式1</router-link>
       <div @click="$router.push({name:'HelloWorld', query:{text: '测试跳转'}})">跳转方式2</div>
       <span v-once>{{msg | filterMsg}}</span>
       <div>{{computedMsg}}</div>
       <div :class="{'color-ui': hasColor}">{{handelMsg()}}</div>
       <second :class="{'color-ui': hasColor}"></second>
       <div :style="{'color': colorRed}">通过变量改变颜色</div>
       <div ref="gray" style="">通过ref改变样式</div>
       <ul>
           <li v-for="(item, index) in arrs">{{index}}{{item.name}}</li>
       </ul>
       <div>输入的值：{{inputVal}}
           <input type="text" v-model="inputVal" placeHolder="请输入"/>
       </div>
       <demo :title.sync="title"></demo>{{title}}
       <div>{{count}}</div>
       <div>{{count1}}</div>
       <button @click="clickMe">测试</button>
       <button @click="clickPlus">测试1</button>
   </div>
</template>

<script>
    import Child from "../components/child";
    import Demo from "../components/Demo";
    import demo from "../mixins/demo";
    import {mapGetters} from "Vuex";
    export default {
        name: "index",
        components: {
            Demo, Child, Second: {
            template: '<span class="hi">HI</span>'
            }},
        mixins: [demo],
        data() {
            return {
                msg: '第一个vue',
                hasColor: true,
                colorRed: 'red',
                arr: [
                    {
                        name: '列表1',
                        index: 2
                    },
                    {
                        name: '列表2',
                        index: 3
                    }
                ],
                inputVal: '',
                msgVal: '',
                title: ''
            }
        },
        computed: {
            ...mapGetters(['count', 'count1']),
            computedMsg() {
                return '第一个vue（实现计算机属性）'
            },
            arrs() {
                return this.arr.filter((item, index) => {
                    return index == 0
                })
            }
        },
        mounted() {

        },
    }
</script>

<style>
    .color-ui {
        color: aquamarine;
    }
</style>
