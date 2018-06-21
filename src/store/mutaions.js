import * as types from './mutation-type';

export default {
    [types.INCREMENT] (state) {
        state.count++;
    },
    [types.DECMENT] (state){
        state.count--;
    }
};