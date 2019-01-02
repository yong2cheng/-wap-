import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import './javascript/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from './utils/fetch'

import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import customComponents from './custom-components'
Vue.use(ElementUI)
Vue.use(customComponents)
Vue.prototype.axios = axios

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})