import * as api from "./api.js";
import {get} from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


let serviceHost = "http://localhost:3030";
api.settings.host = serviceHost;


export async function getAllBooks() {
    let url = serviceHost + "/data/books?sortBy=_createdOn%20desc"
    return api.get(url);

}


export async function createBook(data) {
    let url = serviceHost + "/data/books";

    return await api.post(url, data);

}

export async function getDetails(id) {
    return await api.get(serviceHost + "/data/books/" + id)

}

export async function deleteBook(id) {
    let url = serviceHost + "/data/books/" + id;
    return await api.del(url);

}

export async function editBook(id, data) {
    let url = serviceHost + "/data/books/" + id;
    return await api.put(url, data)
}

export async function getBooksById(userId) {
    let url = serviceHost + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
    return await api.get(url);
}

export async function getByYear(query) {
    let url = serviceHost + `/data/cars?where=year%3D${query}`;
    return await api.get(url);

}

//BONUS functionality below
export async function like(bookId) {
    let url = serviceHost + `/data/likes`
    return await api.post(url, {bookId});
}

export async function getLikes(bookId) {
    let url = serviceHost + `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`;
    return await api.get(url);
}

export async function checkIfLiked(bookId, userId) {
    let url = serviceHost + `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
    return await get(url);
}