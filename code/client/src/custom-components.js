import Back from 'components/Back'
import NoneData from 'components/NoneData'
import Loading from 'components/Loading/loading'
const install = Vue => {
    Vue.component('Back', Back)
    Vue.component('NoneData', NoneData)
    Vue.component('Loading', Loading)
}
export default install
