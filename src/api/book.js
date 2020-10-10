import request from '@/utils/request'

export function login(data) { //登陆
    return request({
        url: '/106.12.182.12:8081/login/userLogin',
        method: 'get',
        params: data
    })
}

export function registry(data) { //注册
    return request({
        url: '/106.12.182.12:8081/login/userRegistry',
        method: 'get',
        params: data
    })
}

export function sendMail(data) { //发送邮件
    return request({
        url: '/106.12.182.12:8081/login/sendMail',
        method: 'get',
        params: data
    })
}

export function resetPwd(data) { //密码重置
    return request({
        url: '/106.12.182.12:8081/login/resetPwd',
        method: 'get',
        params: data
    })
}







