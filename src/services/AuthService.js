import {ApiReaderService} from "./ApiService"

export async function loginReader (data) {
    console.log(data, "in new Service");
    return ApiReaderService.fetchData({
        url: '/reader/loginReader',
        method: 'post',
        data
    })
}

export async function updateReader (data) {
    return ApiReaderService.fetchData({
        url: '/reader/updateReader',
        method: 'post',
        data
    })
}

export async function createReader (data) {
    return ApiReaderService.fetchData({
        url: '/reader/createReader',
        method: 'post',
        data
    })
}

export async function verifyOtp (data) {
    return ApiReaderService.fetchData({
        url: '/reader/verifyOtp',
        method: 'post',
        data
    })
}

export const logoutReader = () => {
    localStorage.removeItem("user");
    return true;
};