function solve(n,k){

    let array = [1];

    for (let i = 0; i < n-1; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {

           if(array[i-j]){

               sum+=array[i-j];
           }
        }

        array.push(sum);
    }

    return array;
}
solve(6,3);