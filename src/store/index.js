import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        keyword:''
    },
    mutations:{
        setKeyword(state,v) {
            state.keyword = v
        },
    },
    getters:{},
    actions:{},
    modules:{},
})