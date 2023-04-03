import {ApiBookService} from "./ApiService"

export async function getBooklist () {
    return ApiBookService.fetchData({
        url: 'book/getAllBooks',
        method: 'get',
    })
}

export async function getBookDetail (data) {
    return ApiBookService.fetchData({
        url: 'book/getBookDetails',
        method: 'post',
        data
    })
}
