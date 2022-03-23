import * as api from "./api.js";

// unified host setting for easy one-place change later
const host = "http://localhost:3030";
api.settings.host = host;


export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getFurniture() {
    return await api.get(host + "/data/catalog");
}

export async function getItemById(furnitureId) {

    return await api.get(host + "/data/catalog/" + furnitureId);
}

export async function myFurniture() {
    const userId = sessionStorage.getItem("userId");
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export async function createFurniture(data) {
    return await api.post(host + "/data/catalog", data);
}

export async function editFurniture(furnitureId, data) {
    return await api.put(host + "/data/catalog/" + furnitureId, data);

}

export async function deleteFurniture(furnitureId) {

    return await api.del(host + "/data/catalog/" + furnitureId);
}