function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        //   TODO:
        //   ["PizzaHut - Peter 500, George 300, Mark 800",
        // "TheLake - Bob 1300, Joe 780, Jane 660"]
        // let input = ["PizzaHut - Peter 500, George 300, Mark 800",
        //     "TheLake - Bob 1300, Joe 780, Jane 660"]
        let input = JSON.parse(document.querySelector("textarea").value);

        let restaurants = {};

        for (let i = 0; i < input.length; i++) {
            let inputInfo = input[i].split(" - ");
            let restaurantName = inputInfo[0];
            let inputPersonList = inputInfo[1].split(", ");

            let personsArray = [];
            for (let j = 0; j < inputPersonList.length; j++) {
                let currentPerson = {};
                let currentPersonInfo = inputPersonList[j].split(" ");
                currentPerson = {name: currentPersonInfo[0], salary: Number(currentPersonInfo[1])}
                personsArray.push(currentPerson);
            }

            if(!restaurants[restaurantName]){
                restaurants[restaurantName] ={
                    names: [],
                    getAverage(){

                      let average=  this.names.reduce((acc,el)=> acc+ el.salary,0)/this.names.length;
                      return average;
                    },
                    getWorkers(){
                        return this.names.sort((a,b)=> b.salary-a.salary).map(e=> `Name: ${e.name} With Salary: ${e.salary}`).join(" ");
                    }
                
                }
                    
                
            }
           restaurants[restaurantName].names = restaurants[restaurantName].names.concat(personsArray);
        }



        let bestRestaurant = Object.entries(restaurants).sort((a,b)=> b[1].getAverage()-a[1].getAverage())[0]
        let outputString = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].getAverage().toFixed(2)} Best Salary: ${bestRestaurant[1].names.sort((a,b)=> b.salary-a.salary)[0].salary.toFixed(2)}`
        let workersResult = bestRestaurant[1].getWorkers();

        document.querySelector("#bestRestaurant p").textContent = outputString;
        document.querySelector("#workers p").textContent= workersResult;


    }


}