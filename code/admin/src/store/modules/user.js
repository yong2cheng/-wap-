import axios from 'src/utils/fetch'
import {getToken} from 'src/utils/auth'
import md5 from 'js-md5'
// import axios1 from 'axios'

const user = {
	state: {
		list: [],
		userTotal: 0,
		name: '',
		username: '',
		roles: null,
		token: getToken(),
		otherList: [],
		provinceList: [],
		cityList: [],
		areaList: [],
		bankList:[],
		subBankList:[],
		userBankList:[],
		userAddressList:[]
	},
	mutations: {
		SET_TOKEN (state, token) {
			state.token = token;
		},
		SET_USERINFO (state, info) {
			state.name = info.name;
			state.username = info.username;
			state.roles = [info.username];
		},
		USERLIST (state, data) {
			console.log(data)
			state.list = data.list
			state.userTotal = data.total;
		},
		GET_INFOLIST (state, data) {
			state.otherList = data;
		},
		CLEARINFO (state) {
			state.name = '';
			state.username = '';
			state.roles = null;
		},
		PROVINCELIST (state, data) {
			state.provinceList = data
		},
		CITYLIST (state, data) {
			state.cityList = data
		},
		AREALIST (state, data) {
			state.areaList = data
		},
		BANKLIST (state, data) {
			state.bankList = data
		},
		SUBBANKLIST (state, data) {
			state.subBankList = data
		},
		USERBANKLIST (state, data) {
			state.userBankList = data
		},
		USERADDRESSLIST (state, data) {
			state.userAddressList = data
		},
	},
	actions: {
		clearInfo ({commit}) {
			return new Promise( (resolve, reject) => {
				axios.get('user/logout').then( res => {
					commit('CLEARINFO')
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		userLogin ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/login',{
					username: info.username,
					password: info.password,
					graphValidateCode: info.graphValidateCode,
					userType:2
				}).then( res => {
					console.log(document.cookie)
					// console.log(res)
					state.token = getToken();
					
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getUserInfo ({state, commit}) {
			return new Promise( (resolve, reject) => {
				axios.get('user/datail',{
					userType:2
				}).then( res => {
					console.log(res)
					commit('SET_USERINFO', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getUserList ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('user/query', params).then( res => {
					console.log(res)
					commit('USERLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		updateStatus ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/update', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		resetPassword ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/resetPassword', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		addUser ({commit}, info) {
			info.pwd = md5(info.pwd)
			return new Promise( (resolve, reject) => {
				axios.post('user/add', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		delUser ({commit}, id) {
			return new Promise( (resolve, reject) => {
				axios.get('user/del', {id: id})
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		updateUser ({commit}, info) {
			info.pwd = md5(info.pwd)
			info.old_pwd = md5(info.old_pwd)
			return new Promise( (resolve, reject) => {
				axios.post('user/update', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		getProvinceCity ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('pca/list',info).then( res => {
					console.log(res)
					if(info.level == 1) {
						commit('PROVINCELIST', res.data)
					}
					if(info.level == 2) {
						commit('CITYLIST', res.data)
					}
					if(info.level == 3) {
						commit('AREALIST', res.data)
					}
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getBankList ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('bank/list').then( res => {
					console.log(res)
					commit('BANKLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getBankSubList ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('bank/subList',info).then( res => {
					commit('SUBBANKLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getAddress ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('address',info).then( res => {
					console.log(res)
					commit('USERADDRESSLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		addAddress ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('address/insert',info).then( res => {
					resolve(res)
				}).catch( err => {
					reject(err)
				})
			})
		},
		updateUserAddress ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('address/update',info).then( res => {
					console.log(res)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getUserBank ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('userBank',info).then( res => {
					console.log(res)
					commit('USERBANKLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		updateUserBank ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('userBank/update',info).then( res => {
					console.log(res)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		addBank ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('userBank',info).then( res => {
					resolve(res)
				}).catch( err => {
					reject(err)
				})
			})
		},
	}
}

export default user