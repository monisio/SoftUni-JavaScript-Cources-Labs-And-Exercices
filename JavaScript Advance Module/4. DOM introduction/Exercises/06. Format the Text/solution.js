function solve() {
    //TODO

    //get text from input
    // separate text into array with split separator '.'
    let inputElement = document.getElementById('input');
    let inputTextAsArray = inputElement.value.split('.').filter(e => (e.length > 0)).map(e => e + '.');
    let outputDivElement = document.getElementById("output");



    let indexRoof = Math.ceil(inputTextAsArray.length / 3)


    for (let i = 0; i < indexRoof; i++) {
        outputDivElement.innerHTML +=("<p>" + inputTextAsArray.splice(0, 3).join("") + "</p>");

    }

    // let counter = 0;
    // let currentString = '';
    // let resultArray = [];
    // for (let i = 0; i < inputTextAsArray.length; i++) {
    //     counter++;
    //     currentString += inputTextAsArray[i];
    //
    //
    //     if (counter === 3) {
    //         counter = 0;
    //         resultArray.push("<p>" + `${currentString}` +"</p>");
    //         currentString = '';
    //     }
    //
    //
    // }
    //
    // outputDivElement.innerHTML = resultArray.join('.');

}