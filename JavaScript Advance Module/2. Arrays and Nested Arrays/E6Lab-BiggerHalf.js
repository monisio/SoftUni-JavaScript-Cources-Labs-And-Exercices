function solve(array) {

    array.sort((a, b) => a - b);

    return array.slice(Math.floor(array.length / 2));
}

solve([3, 19, 14, 7, 2, 19, 6]);