import * as types from './mutations-type'

export default {
    [types.HANDEL_COUNT](state, data) {
        state.count += 1
    }
}