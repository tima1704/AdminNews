export const base ='https://news-ea06e-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const API = {
    post: (data, cat,title) => {
        return fetch(`${base}/${title}/${cat}`,{
            method: 'POST',
            headers: {
                'Content-type': 'application.json'
            },
            body: data,
        })
    },
    get: (recieve, id,title) => {
        return fetch(`${base}/${title}/${recieve}/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application.json'
            },
        })
    },
    patch: (data , url , id,title) => {
        return fetch (`${base}${title}${url}${id}` , {
            method: 'PATCH',
            body: data,
        })
    },

    delete: (url, id,title) => {
        return fetch(`${base}/${title}/${url}/${id}` , {
            method: 'DELETE',
        })
    },
}