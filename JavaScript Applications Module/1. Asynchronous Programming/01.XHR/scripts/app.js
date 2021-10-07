function loadRepos() {
    let resultElement = document.getElementById("res");
    let url = "https://api.github.com/users/testnakov/repos";

    const httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener("readystatechange", function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            resultElement.textContent = httpRequest.responseText;
        } else {
            resultElement.textContent = "Error fetching data!"
        }

    });

    httpRequest.open("GET", url);
    httpRequest.send();

}