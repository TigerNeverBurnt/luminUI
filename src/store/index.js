import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state:{
        main_text : "",
        search_text : ""
    },
    mutations: {
        setMainText(state, text){
            state.main_text = text;
        },
        addMainText(state, text){
            state.main_text += text;
        },
        setSearchText(state, text){
            state.search_text = text;
        },
        addSearchText(state, text){
            state.search_text += text;
        }
    },
    getters:{
        getMainText : state => {
            return state.main_text;
        },

        getSearchText : state =>{
            return state.search_text;
        }
    }
})