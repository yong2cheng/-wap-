import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import task from './modules/task'
import other from './modules/other'
import integral from './modules/integral'
import sysSetting from './modules/sysSetting'
import shopping from './modules/shopping'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        permission,
        task,
        other,
        integral,
        sysSetting,
        shopping
    },
    getters
})

export default store