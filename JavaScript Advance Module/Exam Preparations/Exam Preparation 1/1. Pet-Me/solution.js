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

        if (!nameInput || Number.isNaN(Number(ageInput)) || !kindInput || !ownerInput) {
            return;
        }

        let contactButton = e("button", {}, "Contact with owner");
        contactButton.addEventListener("click", contact);

        let newElement = e("li", {},
            e("p", {},
                e("strong", {}, nameInput),
                " is a ",
                e("strong", {}, ageInput),
                " year old ",
                e("strong", {}, kindInput)
            ),
            e("span", {}, `Owner: ${ownerInput}`),
            contactButton
        )

        document.querySelector("#adoption ul").appendChild(newElement);


    }

    function contact(event) {
        let parent = event.currentTarget.parentElement;
        let button = event.currentTarget;

        button.textContent = "Yes! I take it!";
        parent.removeChild(button);
        button.removeEventListener("click", contact);
        button.addEventListener("click", takeIt);
        let newElement = e("div", {},
            e("input", {placeholder: "Enter your names"},),

            button);
        parent.appendChild(newElement)


    }

    function takeIt(event) {
        let divContainer = event.currentTarget.parentElement;
        let inputName = divContainer.querySelector("input").value;
        let button  = event.currentTarget.parentElement.querySelector("button");

        if (!inputName) {
            return;
        }


        let wholeForm = event.currentTarget.parentElement.parentElement
        wholeForm.remove();
        button.removeEventListener("click", takeIt);
        button.addEventListener("click", archive);
        button.textContent= "Checked";
        wholeForm.querySelector("span").textContent= `New Owner: ${inputName}`
        wholeForm.appendChild(button);
        let currentDiv = wholeForm.querySelector("div");
        currentDiv.remove()


        document.querySelector("#adopted ul").appendChild(wholeForm);

    }

    function archive(event){
        event.currentTarget.parentElement.remove();

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
}


