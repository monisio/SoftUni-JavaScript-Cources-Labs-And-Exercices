function add(number){
    return function (number2){
        return number+number2;
    }
}



let test = add(5);

console.log( test(4));