import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import './javascript/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from './utils/fetch'
import clipboard from 'clipboard';
// import './utils/appback.js'
import Mui from 'vue-awesome-mui';
import 'vue-awesome-mui/mui/dist/css/mui.css';

import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import customComponents from './custom-components'
Vue.use(ElementUI)
Vue.use(customComponents)
Vue.use(Mui);
Vue.prototype.axios = axios
Vue.prototype.clipboard = clipboard;
Vue.prototype.mui = Mui;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})