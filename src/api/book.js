import request from '@/utils/request'

export function login(data) { //登陆
    return request({
        url: '/resolver/login/userLogin',
        method: 'post',
        params: data
    })
}

export function registry(data) { //注册
    return request({
        url: '/resolver/login/userRegistry',
        method: 'post',
        params: data
    })
}

export function sendMail(data) { //发送邮件
    return request({
        url: '/resolver/login/sendMail',
        method: 'post',
        params: data
    })
}

export function resetPwd(data) { //密码重置
    return request({
        url: '/resolver/login/resetPwd',
        method: 'post',
        params: data
    })
}







