
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueSpeech from 'vue-speech'
import store from './store'


Vue.use(VueSpeech)

Vue.use(ElementUI)
<<<<<<< HEAD

  
=======
Vue.use(Vuex)

>>>>>>> 551a8ba69bdf20064f549cbf85f15132b0ffa718
new Vue({
    el: '#app',
    store,
    render: h => h(App),
    Record: h =>h(Record),
    
})
