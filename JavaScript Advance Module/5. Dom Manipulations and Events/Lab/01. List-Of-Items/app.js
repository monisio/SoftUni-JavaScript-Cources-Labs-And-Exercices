function addItem() {
    //get resources
    let itemsListElement = document.getElementById("items");
    let inputFieldElement = document.querySelector("#newItemText");

    let newItemText = inputFieldElement.value;

    //create new element

    let newItemElement = document.createElement("li")
    newItemElement.appendChild(document.createTextNode(newItemText));

    itemsListElement.appendChild(newItemElement);

    inputFieldElement.value = '';


}