import axios from 'axios'
import { BookBaseURL, ReaderBaseURL, PaymentBaseURL, AuthorBaseURL  } from "../configs/app.config";
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from '../constants/api.constant'

const unauthorizedCode = [401]

//Reader Server Api Calls

export const BaseReaderService = axios.create({
    timeout: 60000,
    baseURL: ReaderBaseURL
})

BaseReaderService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BaseReaderService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)

//Reader Server Api Calls

export const BaseAuthorService = axios.create({
    timeout: 60000,
    baseURL: AuthorBaseURL
})

BaseAuthorService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BaseAuthorService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)

//Book Server Api Calls

export const BaseBookService = axios.create({
    timeout: 60000,
    baseURL: BookBaseURL
})

BaseBookService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BaseBookService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)

//Payment Server Api Calls

export const BasePaymentService = axios.create({
    timeout: 60000,
    baseURL: PaymentBaseURL
})

BasePaymentService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BasePaymentService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)