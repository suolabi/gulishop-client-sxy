import {
    v4 as uuidv4
} from 'uuid';

export function getUserTempId() {
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    // 如果不存在
    if (!userTempId) {
        //重新生成一个
        userTempId = uuidv4()
        // 存在localStorage里
        localStorage.setItem('USERTEMPID_KEY',userTempId)
    }
    return userTempId
}