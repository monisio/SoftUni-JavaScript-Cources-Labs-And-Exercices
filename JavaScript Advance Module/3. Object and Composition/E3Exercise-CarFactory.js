function carFactory(order){
    const engines = {
        small:{ power: 90, volume: 1800 },
        normal:{ power: 120, volume: 2400},
        monster:{power: 200, volume: 3500}

    }
    const carriage= {
        Hatchback: { type: 'hatchback', color:order.color  } ,
        Coupe: { type: 'coupe', color: order.color }
    }

    let resultCar ={};
    resultCar.model = order.model;
    if(order.power<=90){
        resultCar.engine = engines.small;
    }else if(order.power>90&& order.power<=120){
        resultCar.engine = engines.normal;
    }else{
        resultCar.engine = engines.monster;
    }

    resultCar.carriage = carriage[order.carriage[0].toUpperCase()+order.carriage.slice(1)];
    if(order.wheelsize%2===0){
        order.wheelsize-=1;
    }
    resultCar.wheels = Array(4).fill(order.wheelsize);

    return resultCar;
}



 console.log( carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));





    //SmallEngine: { power: 90, volume: 1800 }
// NormalEngine: { power: 120, volume: 2400 }
// MonsterEngine: { power: 200, volume: 3500 }



//SmallEngine: { power: 90, volume: 1800 }
// NormalEngine: { power: 120, volume: 2400 }
// MonsterEngine: { power: 200, volume: 3500 }


//Hatchback: { type: 'hatchback', color: <as required> }
// Coupe: { type: 'coupe', color: <as required> };