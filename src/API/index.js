import { API } from './api';

export const createNews = (data, cat,title) => {
    return API.post(JSON.stringify(data), cat,title)
}

export const getNews = (recieve,id,title) => {
    return API.get(recieve , id,title)
}

export const deletenews = (url,id,title) => {
    return API.delete(url,id,title)
}

export const changeNews = (body, url, id, title) => {
    return API.patch(body, url, id,title)
}