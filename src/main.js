
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueSpeech from 'vue-speech'
import store from './store'


Vue.use(VueSpeech)
Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    Record: h =>h(Record),
    
})
