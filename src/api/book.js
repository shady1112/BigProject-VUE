import request from '@/utils/request'

export function login(data) { //登陆
    return request({
        url: '/book/login/userLogin',
        method: 'post',
        params: data
    })
}

export function registry(data) { //注册
    return request({
        url: '/book/login/userRegistry',
        method: 'post',
        params: data
    })
}





