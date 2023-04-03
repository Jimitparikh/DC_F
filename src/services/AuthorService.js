import {ApiReaderService} from "./ApiService"

export async function getAuthor () {
    return ApiReaderService.fetchData({
        url: '/reader/getAuthor',
        method: 'get'
    })
}

export async function addAuthor (data) {
    return ApiReaderService.fetchData({
        url: '/reader/addAuthor',
        method: 'post',
        data
    })
}




