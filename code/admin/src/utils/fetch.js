import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import {removeToken} from './auth'


axios.defaults.withCredentials = true 

// 发送时
axios.interceptors.request.use(config => {
    // 开始
    return config
}, err => {
    return Promise.reject(err)
})

// 响应时
axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

// 检查状态码
function checkStatus(res) { 
    console.log(res)
    // 结束
    if (res.status === 200 || res.status === 304) {
        return res.data
    }
    return {
        code: 0,
        msg: res.data.message || res.statusText,
        data: res.statusText
    }
    return res
}


// 检查CODE值
function checkCode(res) {
    console.log(res)
    if(res.code === 10000) {
        return res
    } else {
        Message({
            message: res.message,
            type: 'error',
            duration:1500
        })
        throw new Error(res.msg)
    }
}

const prefix = 'http://vip.omx65.cn/api/'
// var prefix = 'http://2x3r233961.iask.in/api/'
export default {
    get(url, params) {
        if (!url) return
        return axios({
            method: 'get',
            url: prefix + url,
            params,
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    },
    post(url, data) {
        console.log(url)
        if (!url) return
        return axios({
            method: 'post',
            url: prefix + url,
            data: qs.stringify(data),
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    },
    postFile(url, data) {
        if (!url) return
        return axios({
            method: 'post',
            url: prefix + url,
            data
        }).then(checkStatus).then(checkCode)
    }
}
