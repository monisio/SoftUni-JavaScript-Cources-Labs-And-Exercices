function solve(array) {
    let resultingArray = [];

    let ascending = array.slice(0).sort((a, b) => a - b);
    let descending = array.slice(0).sort((a, b) => b - a);

    for (let i = 0; i < array.length; i++) {
        if (resultingArray.length === array.length) {
            break;
        }

        resultingArray.push(ascending[i]);

        if (resultingArray.length === array.length) {
            break;
        }
        resultingArray.push(descending[i]);


    }
    return resultingArray;

   // console.log(resultingArray);

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,90 ]);