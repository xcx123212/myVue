import * as types from '../mutations-type'
import https from '../../https'

const state = {
    count1: 0
};

const actions = {
    [types.LOGIN]({}, data) {
        // return http.post('/register', data).then(res => {
        //     return res.data
        // }).catch(function(err){
        //     console.log(err);
        // });
    }
};

const mutations = {
     [types.HANDEL_COUNT_NEW](state, data) {
         state.count1 += 2
     }
};

export default {
    actions,
    mutations,
    state,
    getters: {
        count1 : state => state.count1
    }
}