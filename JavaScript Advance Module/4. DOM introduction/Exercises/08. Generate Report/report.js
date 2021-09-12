function generateReport() {
    //TODO

    let headings = document.querySelectorAll("input");


    let resultArray = [];
    for (let i = 0; i < headings.length; i++) {
        let checkBoxElement = headings[i];
        if (checkBoxElement.checked) {
            let fieldsContentElements = document.querySelectorAll("tbody tr");
            for (let j = 0; j < fieldsContentElements.length; j++) {
                let obj = !resultArray[j]? {}:resultArray.shift();
                let propertyName = checkBoxElement.name;
                obj[propertyName] = fieldsContentElements[j].children[i].textContent;
                resultArray.push(obj);
            }


        }


    }

    let output = JSON.stringify(resultArray);

   document.getElementById("output").value =output;

}