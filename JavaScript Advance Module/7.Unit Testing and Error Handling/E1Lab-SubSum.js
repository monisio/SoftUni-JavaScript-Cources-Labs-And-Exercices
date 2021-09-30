function sum(arr, start, end) {
    if (!Array.isArray(arr)|| arr.some(e=> isNaN( Number(e)))){
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }

    if(end>arr.length-1){
        end= arr.length-1;
    }

    return arr.slice(start, end+1).reduce((acc,el)=> acc+el,0);
}

console.log(sum( [10, 20, 30, 40, 50, 60], 3, 300));
console.log(sum( [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1));
console.log(sum( [10, 'twenty', 30, 40], 0, 2));
console.log(sum( [], 1, 2));
console.log(sum('text', 0, 2));