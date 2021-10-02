function validator(request) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"]
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]
    let method = request.method;
    let uri = request.uri;
    let version = request.version;
    let message = request.message;


        if (!method || !validMethods.includes(method)) {
            throw  new Error("Invalid request header: Invalid Method")
        }


        if ( !uri|| /[^.\w]+/g.test(uri)) {
            throw new Error("Invalid request header: Invalid URI");
        }

        if (!version||!validVersions.includes(version)) {
            throw new Error("Invalid request header: Invalid Version");
        }

        if (!request.hasOwnProperty("message") || /[<>\\&'"]+/g.test(message) ) {
            throw  new Error("Invalid request header: Invalid Message");
        }

    return request;

}


validator({
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    }


)