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

export function sendMail(data) { //发送邮件
    return request({
        url: '/book/login/sendMail',
        method: 'post',
        params: data
    })
}

export function resetPwd(data) { //密码重置
    return request({
        url: '/book/login/resetPwd',
        method: 'post',
        params: data
    })
}







