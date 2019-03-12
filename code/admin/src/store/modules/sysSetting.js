import axios from 'src/utils/fetch'

const sysSetting = {
	state: {
		list:[],
		noticelist:[],
		noticetotal:[],
        total: 0,
        goodsList:[],
        taskRewardlist:[],
        taskRewardtotal: 0,
        status:''
	},
	mutations: {
		VIPCONDITION (state, data) {
			state.list = data
            state.total = data.length;
            console.log(state)
        },
        TASKREWARD (state, data) {
			state.taskRewardlist = data
            state.taskRewardtotal = data.length;
            console.log(state)
		},
		NOTICE (state, data) {
			state.noticelist = data
            state.noticetotal = data.length;
            console.log(state)
        },
        GOODSLISTS (state, data) {
			state.goodsList = data
        },
        OPERTIONSTATUS(state, res) {
            state.status = res
        }
	},
	actions: {
		getVipCondition ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('vipCondition/query').then( res => {
                    console.log('sususu')
					console.log(res)
					commit('VIPCONDITION', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
        },

        getTaskReward ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('taskReward/query').then( res => {
					console.log(res)
					commit('TASKREWARD', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},

		getNotice ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('notice/query').then( res => {
					console.log(res)
					commit('NOTICE', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
        
        updatevVipCondition ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('vipCondition/update', info)
					.then( res => {
						commit('OPERTIONSTATUS', res.code)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
        },

        updatevTaskReward ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('taskReward/update', info)
					.then( res => {
						commit('OPERTIONSTATUS', res.code)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},

		updatevNotice ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('notice/update', info)
					.then( res => {
						commit('OPERTIONSTATUS', res.code)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},

        getGoodsLists ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('goods/list').then( res => {
					console.log(res)
					commit('GOODSLISTS', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},

		updataPassword ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/password', info)
					.then( res => {
						commit('OPERTIONSTATUS', res.code)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
	}
}

export default sysSetting