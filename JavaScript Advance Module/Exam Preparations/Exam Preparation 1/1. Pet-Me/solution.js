function solve() {

    'use strict'
    document.querySelector("#container button").addEventListener("click", add);

    function add(event) {
        event.preventDefault();
        let formDiv = event.currentTarget.parentElement;

        let nameInput = formDiv.querySelector("[placeholder='Name']").value;
        let ageInput = formDiv.querySelector("[placeholder='Age']").value;
        let kindInput = formDiv.querySelector("[placeholder='Kind']").value;
        let ownerInput = formDiv.querySelector("[placeholder='Current Owner']").value;

        Array.from(document.querySelectorAll("#container input")).forEach(e => e.value = "");

        if (!nameInput ||Number.isNaN(ageInput) || !kindInput || !ownerInput) {
            return;
        }


        let mainLiItem = document.createElement("li");

        let paragraphElement = document.createElement("p");

        let nameStrong = document.createElement("strong");
        nameStrong.textContent = nameInput;
        paragraphElement.appendChild(nameStrong);


        let ageStrong = document.createElement("strong");
        ageStrong.textContent = ageInput;
        paragraphElement.appendChild(ageStrong);


        let kindStrong = document.createElement("strong");
        kindStrong.textContent = kindInput;
        paragraphElement.appendChild(kindStrong);
        mainLiItem.appendChild(paragraphElement);

        paragraphElement.textContent = ` is a year old `;

        let spanOwnerElement = document.createElement("span");
        spanOwnerElement.textContent = "Owner " + ownerInput;
        mainLiItem.appendChild(spanOwnerElement);

        let buttonElement = document.createElement("button");
        buttonElement.textContent = "Contact with owner";

        mainLiItem.appendChild(buttonElement);

        document.querySelector("#adoption ul").appendChild(mainLiItem);


    }

}

