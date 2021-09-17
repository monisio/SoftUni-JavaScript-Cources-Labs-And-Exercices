function deleteByEmail() {

    let inputFieldElement = document.getElementsByName("email");

    let searchEmail = inputFieldElement[0].value;

    inputFieldElement[0].value ='';

    let tableEmailDataElements = document.querySelectorAll('tbody td:nth-child(2)');

    let resultElement = document.getElementById('result');


    for (const emailElement of  tableEmailDataElements) {

        if (searchEmail===emailElement.textContent){
            let row = emailElement.parentNode;
            row.parentNode.removeChild(row);

            resultElement.textContent="Deleted"
            return;
        }

    }

    resultElement.textContent= "Not found."

}