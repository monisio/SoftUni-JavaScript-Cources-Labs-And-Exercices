function solve(array, n){

    for (let i = 0; i < n; i++) {
        array.unshift(array.pop());

    }


    console.log(array.join(' '));


}