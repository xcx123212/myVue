import Vue from 'vue'
import Vuex from 'Vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import my from './modules/my'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    modules: {
        my
    }
})