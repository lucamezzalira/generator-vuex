import Vuex from 'vuex';
import Vue from 'vue'

import CounterStore from './CounterStore';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        counter: CounterStore
    }
})