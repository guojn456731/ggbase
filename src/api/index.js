//封装请求
import {post,fetch,patch,put} from '@/utils/http.js'

// 登陆
export const login = (params) => {
    return postRequest('/Ggbase/login', params)
}