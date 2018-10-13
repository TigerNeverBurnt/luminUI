import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueSpeech from 'vue-speech'
import Record from './Record'

Vue.use(VueSpeech)
Vue.use(ElementUI)
Vue.use(Record)
new Vue({
    el: '#app',
    render: h => h(App),
    Record: h =>h(Record)
})
