function attachEventsListeners() {
    let mainScreen = document.querySelector("main");
    mainScreen.addEventListener("click", handler);
    let converter = {

        hours: function (value){
            return {
                days: value / 24,
                minutes: value *60 ,
                seconds: value *3600
            }

        },
        minutes: function (value){
            return {
                days: (value/60)/24 ,
                hours: value / 60,
                seconds: value * 60
            }
        },
        seconds: function (value){
            return {
                days: value/86400,
                hours: value/3600,
                minutes: value/60
            }
        },

        days: function (value){
            return {
                hours: value*24,
                minutes: value*1440,
                seconds: value*86400
            }


        }

    }

    function handler(event) {
        let clickedSource = event.target;
        if(clickedSource.type.toLowerCase()!=="button"){
            return;
        }
        let inputFieldSource = clickedSource.parentElement.querySelector("input:nth-of-type(1)");
        let idOfSource = inputFieldSource.id;
        let value = Number(inputFieldSource.value);

        let converted= converter[idOfSource](value);

        let allElements = document.querySelectorAll("main div");

        for (const element of allElements) {
          let currentField = element.querySelector("input");
          if(converted[currentField.id]){

              currentField.value = converted[currentField.id]
          }

        }
    }

}