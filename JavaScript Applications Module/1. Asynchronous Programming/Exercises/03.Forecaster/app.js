function attachEvents() {
    let baseUrl = "http://localhost:3030/jsonstore/forecaster/locations/";
    let todayUrl = "http://localhost:3030/jsonstore/forecaster/today/";
    let upcomingUrl = "http://localhost:3030/jsonstore/forecaster/upcoming/";

    document.getElementById("submit").addEventListener("click", () => {
        let userInputLocation = document.getElementById("location").value;
         fetch(baseUrl+userInputLocation)
             .then(response => response.json())
             .then(resultArray => resultArray.any(e => e.name === userInputLocation)
            .then(result => fetch(todayUrl+result.code).then(responce=> responce.json())
                .then(responce=>)).catch(error => error.message));


    });
}


attachEvents();