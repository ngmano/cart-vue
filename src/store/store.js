import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions'; 

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        totalQty: 0,
        totalAmount: 0,
        cartData: []
    },
    getters,
    mutations,
    actions
})