import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


let serviceHost = "http://localhost:3030";
api.settings.host = serviceHost;


export async function getAllListings() {
    let url = serviceHost + "/data/cars?sortBy=_createdOn%20desc"
    return api.get(url);

}


export async function createCar(data) {
    let url = serviceHost + "/data/cars";

    return await api.post(url, data);

}

export async function getDetails(id) {
    return await api.get(serviceHost + "/data/cars/" + id)

}

export async function deleteCar(id) {
    let url = serviceHost + "/data/cars/" + id;
    return await api.del(url);

}

export async function editCar(id, data) {
    let url = serviceHost + "/data/cars/" + id;
    return await api.put(url, data)
}

export async function getCarsById(userId) {
    let url = serviceHost + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
    return await api.get(url);
}

export async function getByYear(query){
    let url = serviceHost +`/data/cars?where=year%3D${query}`;
    return await api.get(url)

}
