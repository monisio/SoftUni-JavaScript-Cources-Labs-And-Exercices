function solve(array){
    let output= {};
    for (let i = 0; i < array.length; i++) {
        let[town, product , price] = array[i].split(" | ");
        if(!output.hasOwnProperty(product)){
            output[product]={};
        }
        output[product][town]= Number(price);
    }

    let result= [];
    for (const prop in output) {
        let sortedTowns = Object.entries(output[prop]).sort((a,b)=> a[1]-b[1]);
        let cheapestTown= sortedTowns[0];
        result.push(`${prop} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }

   return result.join("\n");
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);