import axios from 'src/utils/fetch'

const integral = {
	state: {
		list:[],
		total: 0,
	},
	mutations: {
		INTERGRALLIST (state, data) {
			state.list = data.list
            state.total = data.total;
            console.log(state)
		},
	},
	actions: {
		getIntegralLog ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('userIntegralLog/query', params).then( res => {
					console.log(res)
					commit('INTERGRALLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},

		exchangeShooppingList ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('integralConvert/query', params).then( res => {
					console.log(res)
					commit('INTERGRALLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},

		// 跟新积分兑换发货状态
        updateIntegralConvert ({commit, state}, params) {
            return new Promise( (resolve, reject) => {
                axios.post('integralConvert/update', params).
                    then( res => {
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
		},
		
		// 获取会员奖品信息
        getBecomeVIPAwardsList ({commit, state}, params) {
            return new Promise( (resolve, reject) => {
                axios.get('becomeVIP/query', params).
                    then( res => {
                        commit('INTERGRALLIST', res.data)
						resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
		},
		
		// 跟新会员奖品发货状态
        updateVipAwards ({commit, state}, params) {
            return new Promise( (resolve, reject) => {
                axios.post('becomeVIP/update', params).
                    then( res => {
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
		},
	}
}

export default integral