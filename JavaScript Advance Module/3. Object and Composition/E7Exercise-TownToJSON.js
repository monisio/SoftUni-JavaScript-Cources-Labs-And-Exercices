function solve(array) {
    let titles = getLine(array[0]);
    let statsArray = array.slice(1).map(e => getLine(e).reduce(accumulateObject,{}));

    function getLine(input) {
        return input.split(/\s*\|\s*/gim).filter(e => e !== "").map(x => Number.isNaN(Number(x)) ? x : Number(Number(x).toFixed(2)));
    }

    function accumulateObject(obj, el, i) {
        obj[titles[i]]= el;

        return obj;
    }

    return JSON.stringify(statsArray);
}



console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))
