import {ApiReaderService} from "./ApiService"

export async function loginReader (data) {
    console.log(data, "in new Service");
    return ApiReaderService.fetchData({
        url: '/reader/loginReader',
        method: 'post',
        data
    })
}
