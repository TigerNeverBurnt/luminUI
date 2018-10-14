import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

var url = "http://10.7.61.9:5000/";
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state:{
        main_text : "",
        search_text : "",
        img_data : {},
        location_data :{},
        entity_data :{}
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
    actions: {

        SetMainText(context,text){
            context.commit('setMainText',text);
            console.log(this.getters.getPlainState);
            axios.post(url, this.getters.getPlainState)
              .then(function (response) {
                console.log(response.data);
                state.img_data = response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
        },

        SetSearchText(context, text){
            context.commit('setSearchText',text);
            axios.post(url, getters.getPlainState)
              .then(function (response) {
                console.log(response.data);
                state.img_data = response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    getters:{
        getMainText : state => {
            return state.main_text;
        },

        getSearchText : state =>{
            return state.search_text;
        },

        getPlainState: state =>{
            return {
                main_text : state.main_text.replace(/[^a-zA-Z0-9\s]/g, ''),
                search_text : state.search_text.replace(/[^a-zA-Z0-9\s]/g, '')
            }
        }
    }
})