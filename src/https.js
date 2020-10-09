import qs from 'qs'
import store from './store'
import * as types from './store/mutations-type'
import router from './router'
import axios from "axios"

// 创建axios 实例
const service = axios.create({
    baseURL: '', // api的base_url
    timeout: 1000 * 60 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
    config => {
        if (config.method == 'post' &&
            config.headers['Content-Type'] == 'application/x-www-form-urlencoded; charset=UTF-8') {
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


// http response 拦截器
service.interceptors.response.use(
    response => {

        return response;
    },
    error => {
        return Promise.reject(error.response)
    }
)


// export default service;

export function fetch(url, data) {
    return new Promise((resolve, reject) => {
        service.post(url, data, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(res => {
            resolve(res);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}

export function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, {params: params}).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}

export function fetchJSON(url, data) {
    return new Promise((resolve, reject) => {
        service.post(url, data, {
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(res => {
            resolve(res)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}

export function fetchGetJSON(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, {params: params}, {
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(res => {
            resolve(res)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    get(url, data) {
        return fetchGet(url, data)
    },
    post(url, data) {
        return fetch(url, data)
    },
    postJSON(url, data) {
        return fetchJSON(url, data)
    },
    getJSON(url, data) {
        return fetchGetJSON(url, data)
    },
}
