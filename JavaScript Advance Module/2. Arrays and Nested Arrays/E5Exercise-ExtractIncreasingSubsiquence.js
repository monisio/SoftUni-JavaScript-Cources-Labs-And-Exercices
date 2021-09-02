function solve(inputArray) {
    let output = [];
    // let currentNumber=inputArray[0];
   inputArray.reduce((previous, currentNumber) => {
        if (currentNumber >= previous) {
            previous = currentNumber;

        output.push(currentNumber);
        }
       return previous;
   },Number.MIN_SAFE_INTEGER);

    return output;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
//     for (let i = 0; i < inputArray.length; i++) {
//
//         if(inputArray[i]>=currentNumber){
//             currentNumber= inputArray[i];
//             output.push(inputArray[i]);
//         }
//     }
//     return output;
// }
//
// function solve(arr){
//     arr.reduce((acc, val) => {
//         if(val >= acc){
//             console.log(val);
//             acc = val;
//         }
//
//         return acc;
//     }, Number.MIN_SAFE_INTEGER)
// }