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

        if (!nameInput || Number.isNaN(ageInput) || !kindInput || !ownerInput) {
            return;
        }

       let contactButton= e("button",{}, "Contact Owner");
        contactButton.addEventListener("click", contact);

        let newElement = e("li", {},
            e("p",{},
                   e("strong",{}, nameInput),
                    "is a",
                    e("strong", {}, ageInput),
                    "year old",
                    e("strong", {}, kindInput)
            ),
            e("span",{}, `Owner: ${ownerInput}`),
            contactButton
        )

        document.querySelector("#adoption ul").appendChild(newElement);


    }

    function contact(event){
         event.currentTarget.textContent= "Yes, i take it!"



    }

}



function e(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
        element[prop] = attr[prop];
    }

    for (let item of content) {
        if (typeof item === "string" || typeof item === "number") {
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    return element;
}
