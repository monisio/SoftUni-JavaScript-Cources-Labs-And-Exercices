function addItem() {
    //TODO...

    //get resources
    let itemsListElement = document.getElementById("items");
    let inputFieldElement = document.querySelector("#newItemText");

    let newItemText = inputFieldElement.value;

    // check for empty string
    if(newItemText.length===0){
        return;
    }

    //create new element

    let newItemElement = document.createElement("li");

    //create text node in order to escape potential unwanted html text element=> same as parsing text

    newItemElement.appendChild(document.createTextNode(newItemText));

    // append created text element as child node of newly created element

    let anchorElement = document.createElement("a");
    let anchorText = document.createTextNode("[Delete]");

    anchorElement.setAttribute("href", '#');

    anchorElement.appendChild(anchorText);
    newItemElement.appendChild(anchorElement);

    itemsListElement.appendChild(newItemElement);

    //if we use arrow ot lambda we cannot use function to remove only element that called the function
    newItemElement.addEventListener('click',function(){
        newItemElement.remove();
        }
    );

    // clear the input field value
    inputFieldElement.value = '';


}