function attachEvents() {



    document.getElementById("submit").addEventListener("click", () => {
        let userInputLocation = document.getElementById("location").value;


        fetch("http://localhost:3030/jsonstore/forecaster/locations")
            .then(response => response.json())
            .then(locations => {
                let location = locations.find(x => x.name === userInputLocation);
                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(body => body.json())
                    .then(currentWeatherReport => ({code: location.code, currentWeatherReport}));
            })
            .then(({code, currentWeatherReport}) => {
                createCurrentWeather(currentWeatherReport)
                return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/` + code);
            }).then(body => body.json())
            .then(result => {
                result.forecast.forEach(dayReport => createThreeDayForecast(dayReport));

            }).catch(error => error)


    });
}

let conditions = {
    "Sunny": "☀",
    "Partly sunny": "⛅",
    "Overcast": "☁",
    "Rain": "☂",

};


function createThreeDayForecast(report) {
    let upcomingDiv = document.getElementById("upcoming");

    let divForecast = document.createElement("div");
    divForecast.classList.add("forecast-info");

    let mainSpan = document.createElement("span");
    mainSpan.classList.add("upcoming");

    let symbolSpan = document.createElement("span");
    symbolSpan.classList.add("symbol");
    symbolSpan.textContent = conditions[report.condition];
    mainSpan.appendChild(symbolSpan);

    let forecastTemp = document.createElement("span");
    forecastTemp.classList.add("forecast-data");
    forecastTemp.textContent = `${report.low} °/${report.high} °`
    mainSpan.appendChild(forecastTemp);

    let forecastType = document.createElement("span");
    forecastType.classList.add("forecast-data");
    forecastType.textContent = report.condition;
    mainSpan.appendChild(forecastType);
    upcomingDiv.appendChild(mainSpan);

}


function createCurrentWeather(report) {

    let currentConditionDiv = document.getElementById("current");

    let forecastDiv = document.createElement("div");
    forecastDiv.classList.add("forecasts");

    let conditionSymbolSpan = document.createElement("span");
    conditionSymbolSpan.classList.add("condition", "symbol");
    conditionSymbolSpan.textContent = conditions[report.forecast.condition];


    let mainSpan = document.createElement("span");
    mainSpan.classList.add("condition");

    let locationSpan = document.createElement("span");
    locationSpan.classList.add("forecast-data");
    locationSpan.textContent = report.name

    let degreeSpan = document.createElement("span");
    degreeSpan.classList.add("forecast-data");
    degreeSpan.textContent = `${report.forecast.low} °/${report.forecast.high} °`

    let conditionSpan = document.createElement("span");
    conditionSpan.classList.add("forecast-data");
    conditionSpan.textContent = report.forecast.condition;


    forecastDiv.appendChild(conditionSymbolSpan);
    mainSpan.appendChild(locationSpan);
    mainSpan.appendChild(degreeSpan);
    mainSpan.appendChild(conditionSpan);
    forecastDiv.appendChild(mainSpan);
    currentConditionDiv.appendChild(forecastDiv);
    currentConditionDiv.parentElement.style.display = "block";
}

attachEvents();