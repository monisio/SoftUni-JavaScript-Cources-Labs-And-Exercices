function townPopulation(input){
    const townList= {};
    for (let i = 0; i <input.length ; i++) {
        const inputLine =  input[i].split(" <-> ");
        if( townList[inputLine[0]]){

            townList[inputLine[0]] += Number(inputLine[1]);
        }else {
            townList[inputLine[0]] = Number(inputLine[1]);
        }

    }

    for (const entry in townList) {
        console.log(entry+" : "+ townList[entry] )
    }

}


townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
