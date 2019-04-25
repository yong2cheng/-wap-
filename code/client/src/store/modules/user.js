import axios from 'src/utils/fetch'
import {getToken} from 'src/utils/auth'
import md5 from 'js-md5'
// import axios1 from 'axios'

const user = {
	state: {
		list: [],
		noticelist:[],
		provinceList: [],
		cityList: [],
		areaList: [],
		bankList:[],
		subBankList:[],
		userTotal: 0,
		name: '',
		username: '',
		roles: null,
		token: getToken(),
		info: {},
		otherList: [],
	},
	mutations: {
		SET_TOKEN (state, token) {
			state.token = token;
		},
		USERINFO (state, data) {
			state.info = data;
		},
		USERLIST (state, data) {
			state.list = data
			state.total = data
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
		GET_INFOLIST (state, data) {
			state.otherList = data;
		},
		CLEARINFO (state) {
			state.name = '';
			state.username = '';
			state.roles = null;
		},
		NOTICE (state, data) {
			state.noticelist = data
            state.noticetotal = data.length;
            console.log(state)
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
		sendMessage({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('sms',{
					mobile: info
				}).then( res => {
					console.log(res)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		register({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/register',info).then( res => {
					console.log(res)
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
					userType:1
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
					userType:1
				}).then( res => {
					console.log(res)
					commit('USERINFO', res.data)
					sessionStorage.setItem("userName",res.data.username);
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		updataPassword ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/password',info).then( res => {
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
				axios.get('address').then( res => {
					console.log(res)
					commit('USERLIST', res.data)
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
		getUserBank ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('userBank').then( res => {
					console.log(res)
					commit('USERLIST', res.data)
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
		addAlialiCard ({state, commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('user/alipayCard',info).then( res => {
					resolve(res)
				}).catch( err => {
					reject(err)
				})
			})
		},
		getVipCondition ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('vipCondition/query').then( res => {
					console.log(res)
					commit('USERLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		getVIPpolling ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('becomeVIP/polling',params).then( res => {
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
	}
}

export default user