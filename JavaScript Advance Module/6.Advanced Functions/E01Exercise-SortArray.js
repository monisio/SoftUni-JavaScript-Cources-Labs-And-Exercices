function solve(inputArray, order) {


       let asc = (a, b) => a - b;
       let desc = (a, b) => b - a;



    return inputArray.sort(eval(order));


}

solve([14, 7, 17, 6, 8], 'desc');