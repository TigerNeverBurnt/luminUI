import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

var url = "http://10.7.61.9:5000/";
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        main_text: "",
        search_text: "",
        img_data: [],
        location_data: {},
        entity_data: {}
    },
    mutations: {

        setImgData(state, img_array) {
            state.img_data = img_array;
        },
        setMainText(state, text) {
            state.main_text = text;
        },

        addMainText(state, text) {
            state.main_text += text;
        },

        setSearchText(state, text) {
            state.search_text = text;
        },

        addSearchText(state, text) {
            state.search_text += text;
        }
    },
    actions: {
        AddMainText(context, text) {
            text = this.getters.getMainText + text;
            context.dispatch('SetMainText', text);
        },

        SetMainText(context, text) {
            context.commit('setMainText', text);
            console.log(this.getters.getPlainState);
            axios.post(url, this.getters.getPlainState)
                .then(function (response) {
                    console.log(response.data);
                    context.commit('setImgData', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            var para = this.getters.getMainText;
            axios.post(url + "entity", this.getters.getPlainState)
                .then(function (response) {
                    console.log(response.data);
                    var json = response.data;
                    var i;
                    var j;
                    var temp = "";
                    var text = "";
                    for (i = 0; i < json.documents.length; i++) {
                        for (j = 0; j < json.documents[i].entities.length; j++) {
                            para = para.replace(new RegExp(json.documents[i].entities[j].name,"gm"),
                                "<span style='color:red;'><b><a href=" + json.documents[i].entities[j].wikipediaUrl + "\">"+json.documents[i].entities[j].name+"</a></b></span>");
                        }
                    }
                    document.getElementById("highlight").innerHTML = para;
                    var now = new Date().getTime();
                    while(new Date().getTime() < now + 2000){ /* do nothing */ }
                    for (i = 0; i < json.documents.length; i++) {
                        for (j = 0; j < json.documents[i].entities.length; j++) {
                            if (document.getElementById(json.documents[i].entities[j].bingId) != null){
                                document.getElementById(json.documents[i].entities[j].bingId).onclick=function(){
                                    //alert(json.documents[i].entities[j].wikipediaUrl)
                                    //wikipediaUrl
                                }
                            }
                        }
                    }
                }).catch(function (error) {
                console.log(error);
            });
        },

        SetSearchText(context, text) {
            context.commit('setSearchText', text);
            axios.post(url, this.getters.getPlainState)
                .then(function (response) {
                    console.log(response.data);
                    context.commit('setImgData', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    getters: {
        getMainText: state => {
            return state.main_text;
        },

        getImgArray: state => {
            return state.img_data;
        },

        getSearchText: state => {
            return state.search_text;
        },

        getPlainState: state => {
            return {
                main_text: state.main_text.replace(/[^a-zA-Z0-9\s]/g, ''),
                search_text: state.search_text.replace(/[^a-zA-Z0-9\s]/g, '')
            }
        }
    }
})