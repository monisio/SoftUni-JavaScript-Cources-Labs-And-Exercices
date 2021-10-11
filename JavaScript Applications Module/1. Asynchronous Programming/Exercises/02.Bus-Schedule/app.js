function solve() {
    let baseUrl = "http://localhost:3030/jsonstore/bus/schedule/";
    let nextStopId = "depot";
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");
    let infoElement = document.querySelector("#info span");

    function depart() {
        fetch(baseUrl + nextStopId).then(respond => respond.json())
            .then(busStop => {
                infoElement.textContent = busStop.name
                nextStopId = busStop.next;
            });
        departButton.disabled = "true";
        arriveButton.disabled = "";
    }

    function arrive() {

        departButton.disabled = "";
        arriveButton.disabled = "true";
    }

    return {
        depart,
        arrive
    };
}

let result = solve();