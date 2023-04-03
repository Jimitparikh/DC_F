import {ApiReaderService} from "./ApiService"

export async function getWishlist (data) {
    return ApiReaderService.fetchData({
        url: '/reader/getWishlist',
        method: 'post',
        data
    })
}

export async function addToWishlist (data) {
    return ApiReaderService.fetchData({
        url: '/reader/addToWishlist',
        method: 'post',
        data
    })
}

export async function removeFromWishlist (data) {
    return ApiReaderService.fetchData({
        url: '/reader/removeFromWishlist',
        method: 'post',
        data
    })
}

export async function moveAllWishlistedToCart (data) {
    return ApiReaderService.fetchData({
        url: '/reader/moveAllWishlistedToCart',
        method: 'post',
        data
    })
}

export async function getFollowings (data) {
    return ApiReaderService.fetchData({
        url: '/reader/getFollowings',
        method: 'post',
        data
    })
}
export async function unFollowAuthor (data) {
    return ApiReaderService.fetchData({
        url: '/reader/unFollowAuthor',
        method: 'post',
        data
    })
}
export async function followAuthor (data) {
    return ApiReaderService.fetchData({
        url: '/reader/followAuthor',
        method: 'post',
        data
    })
}




