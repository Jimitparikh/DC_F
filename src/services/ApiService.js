import {BaseBookService, BaseReaderService , BasePaymentService} from './BaseService'

export const ApiBookService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BaseBookService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

export const ApiReaderService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BaseReaderService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

export const ApiPaymentService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BasePaymentService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

