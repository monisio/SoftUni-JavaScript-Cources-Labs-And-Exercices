function solve() {


    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");
    let infoElement = document.querySelector("#info span");

    function depart() {


        let nextStopId = infoElement.getAttribute("data-next-stop-id") === null ? "depot" : infoElement.getAttribute("data-next-stop-id");

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`).then(body => body.json())
            .then(busStop => {
                infoElement.setAttribute("data-next-stop-name", busStop.name);
                infoElement.setAttribute("data-next-stop-id", busStop.next);
                infoElement.textContent = `Next Stop ${busStop.name}`
                departButton.disabled = true;
                arriveButton.disabled = false;
            }).catch(error => {
            infoElement.textContent = "Error";
            departButton.disabled = true;
            arriveButton.disabled = true;
        });


    }

    function arrive() {
        infoElement.textContent = `Arrived at ${infoElement.getAttribute("data-next-stop-name")}`
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();