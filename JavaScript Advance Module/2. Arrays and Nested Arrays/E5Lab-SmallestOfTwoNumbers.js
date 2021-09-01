function solve(array){
    array.sort((a,b)=> a-b);

    let array1 = array.slice(0,2);

    console.log(array1.join(" "));
}

solve([30, 15, 50, 5]);