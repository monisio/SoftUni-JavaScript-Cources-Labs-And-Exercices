import * as api from "./api.js";


export const login = api.login;
export const register = api.register;
export const logout = api.logout;


let serviceHost = "http://localhost:3030";
api.settings.host = serviceHost;


export async function getAllAlbums() {
    let url = serviceHost + "/data/albums?sortBy=_createdOn%20desc&distinct=name"
    return api.get(url);

}


export async function createAlbum(data) {
    let url = serviceHost + "/data/albums";

    return await api.post(url, data);

}

export async function getDetailsAlbum(id) {
    return await api.get(serviceHost + "/data/albums/" + id)
}

export async function deleteAlbum(id) {
    let url = serviceHost + "/data/albums/" + id;
    return await api.del(url);

}

export async function editAlbum(id, data) {
    let url = serviceHost + "/data/albums/" + id;
    return await api.put(url, data)
}

export async function searchByNameAlbum(query) {
    let url = serviceHost + `/data/albums?where=name%20LIKE%20%22${query}%22`;
    return await api.get(url);
}





