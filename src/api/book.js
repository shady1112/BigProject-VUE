import request from '@/utils/request'

export function login(data) { //登陆
    return request({
        url: '/book/login/userLogin',
        method: 'post',
        params: data
    })
}




