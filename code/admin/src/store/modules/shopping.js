import axios from 'src/utils/fetch'

const shopping = {
	state: {
		list: [],
		total: 0,
		status:''
	},
	mutations: {
		GOODSLIST (state, data) {
			state.list = data.data.list;
			state.total = data.data.total;
		},
		OPERTIONSTATUS(state, res) {
            state.status = res
        }
	},
	actions: {
		async addGoods ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('goods/insert', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		async updateGoods ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('goods/update', info)
					.then( res => {
						commit('OPERTIONSTATUS', res.code)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		async getGoodsList ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('goods/query', params)
					.then( res => {
						commit('GOODSLIST', res)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
	}
}
export default shopping