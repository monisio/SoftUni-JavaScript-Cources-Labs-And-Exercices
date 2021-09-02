function solve(inputArray) {
    let outputArray = [];
    let number = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let command = inputArray[i];
        number++;

        if (command === 'add') {
            outputArray.push(number);
        } else {
            outputArray.pop();
        }

    }

    if (outputArray.length === 0) {
        console.log("Empty");
    } else {

        outputArray.forEach(e => console.log(e));

    }


}