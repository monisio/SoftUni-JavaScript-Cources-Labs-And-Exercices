export const settings = {
    host: ""
};


async function request(url, options) {

    try {
        const response = await fetch(url, options)

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);

        }
        //handles case when server return non json response and we need to return result without parsing it to json
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }

    } catch (err) {
        alert(err.message);
        throw err;  // re-throw error in order to stop further logic after alerting
                    // because we already catch the original error.
    }
}

// generate options
function getOptions(method = "get", body) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers["X-Authorization"] = token;
    }

    if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }


    return options;
}


//get request
export async function get(url) {
    return await request(url, getOptions());
}

//post request
export async function post(url, data) {
    return await request(url, getOptions("post", data));
}

//put request
export async function put(url, data) {
    return await request(url, getOptions("put", data));
}

//delete request
export async function del(url) {
    return await request(url, getOptions("delete"));
}

// login function
export async function login(email, password) {
    const result = await post(settings.host + "/users/login", {email, password})

    sessionStorage.setItem("email", result.email);
    sessionStorage.setItem("authToken", result.accessToken);
    sessionStorage.setItem("userId", result._id);

    return result;
}


// register function
export async function register(email, password) {
    const result = await post(settings.host + "/users/register", {email, password})

    sessionStorage.setItem("email", result.email);
    sessionStorage.setItem("authToken", result.accessToken);
    sessionStorage.setItem("userId", result._id);

    return result;
}

// logout function
export async function logout() {
    const result = await get(settings.host + "/users/logout")

    sessionStorage.removeItem("email");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userId");

    return result;
}