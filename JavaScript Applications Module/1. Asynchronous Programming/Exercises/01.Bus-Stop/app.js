function getInfo() {
    let baseUrl = "http://localhost:3030/jsonstore/bus/businfo/"
    let inputNumber = document.getElementById("stopId").value;
    let stopName = document.getElementById("stopName");
    let buses = document.getElementById("buses");

    fetch(baseUrl+inputNumber).then(responce=> {
        if (responce.status!==200){
            throw new Error("Error");
        }else{
          return  responce.json()
        }
    }).then(result=>{
        stopName.textContent = result.name;
        let divElement = document.createElement("div");
        for (const busKey in result.buses) {
          let liItem =  document.createElement("li");
          liItem.textContent= `Bus ${busKey} arrives in ${result.buses[busKey]}`;
          divElement.appendChild(liItem);
        }
        buses.appendChild(divElement);
    }).catch(error=> stopName.textContent= error.message );


}