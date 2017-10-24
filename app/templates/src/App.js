import Vue from 'vue';
import { mapActions }from 'vuex';

import store from './stores/Store';
import Counter from './components/Counter.vue';

const app = new Vue({
    el: "#app",
    store,
    render: h => h(Counter)
})