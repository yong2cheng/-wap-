import axios from 'src/utils/fetch'
import { blogTypes ,sources} from './classify'

const task = {
	state: {
		blogTypes,
		sources,
		list: [],
		total: 0,
		status:''
	},
	mutations: {
		BLOGLIST (state, data) {
			state.list = data.data.list;
			state.total = data.data.total;
		},
		OPERTIONSTATUS(state, res) {
            state.status = res
        }
	},
	actions: {
		async addTask ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('task/insert', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		async updateTask ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('task/update', info)
					.then( res => {
						commit('OPERTIONSTATUS', res.code)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		async deleteTask ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.get('task/delete', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		async getTaskList ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('task/query', params)
					.then( res => {
						commit('BLOGLIST', res)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},

		// 获取我的列表
		async reviewedList ({commit, state}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('userTaskRelation/query', params)
					.then( res => {
						commit('BLOGLIST', res)
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},

		// 审核任务
		async toExamine ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('userTaskRelation/update', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},

		// 批量审核任务
		async toExamineBatchUpdate ({commit}, info) {
			return new Promise( (resolve, reject) => {
				axios.post('userTaskRelation/batchUpdate', info)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		}
	}
}
export default task