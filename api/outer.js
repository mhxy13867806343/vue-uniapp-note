import request from '@/common/network';
export const postLogin=(data)=>{
    return request({
        url:'/login',
        data,
        method:'post'
    })
}
export const postRegister=(data)=>{
    return request({
        url:'/register',
        data,
        method:'post'
    })
}

export const getNote=(data)=>{
    return request({
        url:'/note/list',
        data,
        method:'get'
    })
}
export const addNote=(data)=>{
    return request({
        url:'/note/add',
        data,
        method:'post'
    })
}
export const delNote=(note_id)=>{
    return request({
        url:`/note/delete/${note_id}`,
        data:{},
        method:'post'
    })
}
export const findNote=(note_id)=>{
    return request({
        url:`/note/find/${note_id}`,
        data:{},
        method:'get'
    })
}
export const updateNote=(data)=>{
    return request({
        url:`/note/update`,
        data,
        method:'post'
    })
}
