function solve(array, n){
    let output = [];
    for (let i = 0; i <array.length ; i+=n) {
        output.push(array[i]);
    }
    return output;
}