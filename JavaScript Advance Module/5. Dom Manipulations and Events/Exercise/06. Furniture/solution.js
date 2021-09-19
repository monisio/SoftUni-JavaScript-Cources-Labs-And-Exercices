function solve() {

    let generateButton = document.querySelector("div button");
    generateButton.addEventListener("click", generateFunction);


    function generateFunction() {
        let inputTextArea = document.querySelector("div textarea");
        let itemsArray = JSON.parse(inputTextArea.value);
        inputTextArea.value = "";

        let tBodyElement = document.querySelector(".table tbody");

        /*[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]*/
        for (const item of itemsArray) {
            let newTr = document.createElement("tr");

            //setImage
            let imgTd = document.createElement("td");
            let imgElement = document.createElement("img");
            let link = item["img"];
            imgElement.setAttribute("src", link);
            imgTd.appendChild(imgElement);
            newTr.appendChild(imgTd);

            //setName
            let nameP = document.createElement("p");
            nameP.textContent = item["name"];
            let nameTd = document.createElement("td");
            nameTd.appendChild(nameP);
            newTr.appendChild(nameTd);
            //let name = item["name"];


            //sePrice
            let priceP = document.createElement("p");
            priceP.textContent = item["price"];
            let priceTd = document.createElement("td");
            priceTd.appendChild(priceP);
            newTr.appendChild(priceTd);
            //let price = item["price"];


            //setDecFactor
            let decFactorP = document.createElement("p");
            decFactorP.textContent = item["decFactor"];
            let decFactorTd = document.createElement("td");
            decFactorTd.appendChild(decFactorP);
            newTr.appendChild(decFactorTd);
            //let decFactor = item["decFactor"];


            //setButtonElement
            let test = document.querySelector("input[type='checkbox']");
            test.disabled = false;
            let tdOfButtonElement = test.parentElement;

            let button = tdOfButtonElement.cloneNode(true);

            newTr.appendChild(button);


            tBodyElement.appendChild(newTr);


        }


    }

}