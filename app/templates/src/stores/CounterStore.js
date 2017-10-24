import Types from '../configs/MutationTypes';

const counterStore = {
    state:{
        value: 0
    },
    mutations: {
        increment (state) {
            state.value++;
        }
    },
    actions:{
        increment({commit}){
            commit(Types.INCREMENT);
        }
    }
}

export default counterStore;