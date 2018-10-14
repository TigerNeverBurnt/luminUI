
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueSpeech from 'vue-speech'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(VueSpeech)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Vuetify)

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    Record: h =>h(Record),
    
})
