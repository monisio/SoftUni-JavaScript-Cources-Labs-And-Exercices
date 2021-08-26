function getGreatestCommonDivisor(x, y) {

    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;


}


console.log(getGreatestCommonDivisor(2154, 458));