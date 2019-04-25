import axios from '../../utils/fetch'
import { blogTypes } from './classify'

const task = {
    state: {
        types: blogTypes,
        list: [],
        homeList: [],
        info: {},
        currType: '',
        size: 10,
        loadingMore: false,
        loadingBol: true,
        operStatus:''
    },
    mutations: {
        TASKLIST (state, res) {
            state.list = res;
        },
        TASKINFO (state, res) {
            state.info = res.data;
        },
        TASKSTATUS(state, res) {
            state.operStatus = res
        }
    },
    actions: {
        // 获取任务列表
        generaltTask ({commit, state}, params) {
            params.size = params.size || state.size 
            params.taskType = params.taskType === '' ? null:params.taskType 
            state.loadingMore = true
            state.loadingBol = false
            console.log(params)
            return new Promise( (resolve, reject) => {
                axios.get('task/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取我的列表
        myTaskList ({commit, state}, params) {
            params.size = params.size || state.size 
            params.taskType = params.taskType === '' ? null:params.taskType 
            state.loadingMore = true
            state.loadingBol = false
            return new Promise( (resolve, reject) => {
                axios.get('userTaskRelation/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取任务详情
        getTaskInfo ({commit}, params) {
            return new Promise( (resolve, reject) => {
                axios.get('blog/info', {_id}).
                    then( res => {
                        commit('TASKINFO', res)
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 申请任务
        applyTask ({commit}, params) {
            return new Promise( (resolve, reject) => {
                axios.post('userTaskRelation/insert', 
                {
					taskId: params.taskId,
				}
            ).then( res => {
                        commit('TASKSTATUS', res.code)
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 提交任务
        submitTask ({commit}, params) {
            return new Promise( (resolve, reject) => {
                axios.post('userTaskRelation/update', 
                params
            ).then( res => {
                        commit('TASKSTATUS', res.code)
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取积分列表
        getIntegralLog ({commit, state}, params) {
            params.size = 20 
            state.loadingMore = true
            state.loadingBol = false
            return new Promise( (resolve, reject) => {
                axios.get('userIntegralLog/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取智能机器人列表
        buyRobotList ({commit, state}, params) {
            params.size = 20 
            state.loadingMore = true
            state.loadingBol = false
            return new Promise( (resolve, reject) => {
                axios.get('buyRobot/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取积分商城
        getGoodsList ({commit, state}, params) {
            params.size = params.size || state.size 
            state.loadingMore = true
            state.loadingBol = false
            return new Promise( (resolve, reject) => {
                axios.get('goods/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 积分兑换
        exchangeShoopping ({commit, state}, params) {
            return new Promise( (resolve, reject) => {
                axios.get('integralConvert/convert', params).
                    then( res => {
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取积分商城
        exchangeShooppingList ({commit, state}, params) {
            params.size = params.size || state.size 
            state.loadingMore = true
            state.loadingBol = false
            return new Promise( (resolve, reject) => {
                axios.get('integralConvert/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 申请退款
        refundMoney ({commit, state}, params) {
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
            params.size = params.size || state.size 
            state.loadingMore = true
            state.loadingBol = false
            return new Promise( (resolve, reject) => {
                axios.get('becomeVIP/query', params).
                    then( res => {
                        state.loadingMore = false;
                        resolve(res)
                        if (res.data.list.length <= 0 && params.current > 1) return
                        if (params.current > 1) {
                            commit('TASKLIST', state.list.concat(res.data.list))
                        }else {
                            commit('TASKLIST', res.data.list)
                        }
                        if (res.data.list.length >= state.size) {
                            state.loadingBol = true;
                        }
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },
    },
}
export default task