export default {
    state: {
        appName: "员工后台管理",  // 应用名称
        themeColor: "#109a1b",  // 主题颜色
        oldThemeColor: "#049a26",   // 上一次主题颜色
        collapse: false,  // 导航栏收缩状态
        menuRouteLoaded: false,   // 菜单和路由是否已经加载
        mqttConnect: false, //mqtt连接状态
        mqttCallbackCode: 0
    },
    getters: {
        collapse(state) {// 对应着上面state
            return state.collapse
        },
        mqttConnect: state => state.mqttConnect,
        mqttCallbackCode: state => state.mqttCallbackCode,
        themeColor: state => state.themeColor
    },
    mutations: {
        onCollapse(state) {  // 改变收缩状态
            state.collapse = !state.collapse
        },
        setThemeColor(state, themeColor) {  // 改变主题颜色
            state.oldThemeColor = state.themeColor
            state.themeColor = themeColor
        },
        menuRouteLoaded(state, menuRouteLoaded) {  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        },
        onMqttConnect(state, mqttConnect) {
            state.mqttConnect = mqttConnect
        },
        onMqttCallback(state, code) {
            state.mqttCallbackCode = code
        }

    },
    actions: {}
}
