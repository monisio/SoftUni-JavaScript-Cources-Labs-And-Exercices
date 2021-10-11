function attachEvents() {


    let upcomingUrl = "http://localhost:3030/jsonstore/forecaster/upcoming/";

    document.getElementById("submit").addEventListener("click", () => {
        let userInputLocation = document.getElementById("location").value;
        fetch("http://localhost:3030/jsonstore/forecaster/locations")
            .then(response => response.json())
            .then(locations => {
                let location = locations.find(x => x.name === userInputLocation);
                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
            })
            .then(body => body.json())
            .then(currentWeatherReport => {
                createCurrentWeather(currentWeatherReport)
                return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming`)
            })


    });
}

let conditions = {
    "Sunny": "☀",
    "Partly sunny": "⛅",
    "Overcast": "☁",
    "Rain": "☂",

}

function createCurrentWeather(report) {

    let currentConditionDiv = document.getElementById("current");

    let forecastDiv = document.createElement("div");
    forecastDiv.classList.add("forecasts");

    let conditionSymbolSpan = document.createElement("span");
    conditionSymbolSpan.classList.add("condition" ,"symbol");
    conditionSymbolSpan.textContent= conditions[report.forecast.condition];


    let mainSpan = document.createElement("span");
    mainSpan.classList.add("condition");

    let locationSpan = document.createElement("span");
    locationSpan.classList.add("forecast-data");
    locationSpan.textContent= report.name

    let degreeSpan = document.createElement("span");
    degreeSpan.classList.add("forecast-data");
    degreeSpan.textContent=`${report.forecast.low} °/${report.forecast.high} °`

    let conditionSpan = document.createElement("span");
    conditionSpan.classList.add("forecast-data");
    conditionSpan.textContent= report.forecast.condition;


    forecastDiv.appendChild(conditionSymbolSpan);
    mainSpan.appendChild(locationSpan);
    mainSpan.appendChild(degreeSpan);
    mainSpan.appendChild(conditionSpan);
    forecastDiv.appendChild(mainSpan);
    currentConditionDiv.appendChild(forecastDiv);
    currentConditionDiv.parentElement.style.display="block";
}

attachEvents();