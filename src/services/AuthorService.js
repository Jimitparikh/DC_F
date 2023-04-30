import {ApiAuthorService, ApiReaderService} from "./ApiService"

export async function getAuthor () {
    return ApiReaderService.fetchData({
        url: '/reader/getAuthor',
        method: 'get'
    })
}

export async function getAuthorDetail (data) {
    return ApiReaderService.fetchData({
        url: '/reader/getAuthorByID',
        method: 'post',
        data
    })
}

export async function addAuthorReview (data) {
    return ApiAuthorService.fetchData({
        url: '/author/createReviewAndRating',
        method: 'post',
        data
    })
}

export async function getAuthorReviews (data) {
    return ApiAuthorService.fetchData({
        url: '/author/getAllReviewsAndRatingSearchSort',
        method: 'post',
        data
    })
}


