import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import task from './modules/task'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        task,
        user
    },
    getters
})

export default store;