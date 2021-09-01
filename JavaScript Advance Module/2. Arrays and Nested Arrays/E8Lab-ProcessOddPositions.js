function solve(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            output.unshift(array[i]*2);
        }

    }

    return output;
}