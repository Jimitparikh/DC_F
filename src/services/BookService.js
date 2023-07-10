import {ApiBookService} from "./ApiService"
const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return `?${str.join("&")}`;
  };
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

export async function getChapters (data) {
    return ApiBookService.fetchData({
        url: 'chapter/getChapters'+ serialize(data),
        method: 'get',
    })
}

export async function getPages (data) {
    return ApiBookService.fetchData({
        url: 'bookContent/getPages',
        method: 'post',
        data
    })
}

export async function getUpinsBookWise (data) {
    return ApiBookService.fetchData({
        url: 'book/getUpinsBookWise'+ serialize(data),
        method: 'get',
    })
}