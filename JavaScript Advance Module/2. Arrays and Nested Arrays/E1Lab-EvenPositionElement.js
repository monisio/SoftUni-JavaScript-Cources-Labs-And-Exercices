function solve(input) {
    let outputString = '';

    for (let i = 0; i < input.length; i += 2) {

        outputString = outputString.concat(input[i] + ' ');


    }


    console.log(outputString);

}

solve(['20', '30', '40', '50', '60']);