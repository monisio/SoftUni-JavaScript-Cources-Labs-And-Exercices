function solve(array) {
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            outputArray.push(array[i]);
        } else {
            outputArray.unshift(array[i]);

        }


    }

    outputArray.forEach(a=> console.log(a));
}
solve([7, -2, 8, 9]);