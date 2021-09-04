function solve(arr) {

    let sum = arr[0].reduce((acc, val) => {
        return acc + val
    }, 0);



    for (let i = 0; i < arr.length; i++) {

        let currentValue = arr[0].reduce((acc, val) => {
            return acc + val
        }, 0);

        if (currentValue!== sum){
            return false;
        }
    }

    for (let i = 0; i < arr.length ; i++) {
        let currentColSum=0;
        for (let j = 0; j < arr.length ; j++) {
            currentColSum+= arr[j][i];
        }
        if(currentColSum!==sum){
            return false;
        }

    }

    return true;

}