import {ApiPaymentService} from "./ApiService"

export async function addCard (data) {
    console.log(data,"<<<<<<<inServe");
    return ApiPaymentService.fetchData({
        url: 'bank/addCard',
        method: 'post',
        data
    })
}

export async function deleteCard (data) {
    return ApiPaymentService.fetchData({
        url: 'bank/deleteCard',
        method: 'post',
        data
    })
}

export async function getCardDetailForUser (data) {
    return ApiPaymentService.fetchData({
        url: 'bank/getCardDetailForUser',
        method: 'post',
        data
    })
}
