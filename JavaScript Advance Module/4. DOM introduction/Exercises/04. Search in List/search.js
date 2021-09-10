function search() {
    // TODO
    let searchWord = document.getElementById("searchText").value.trim();

    let listElements = document.querySelectorAll("#towns li");

    for (const listElement of listElements) {
        let townName = listElement.textContent;
        if (townName === searchWord) {
            listElement.style.textDecoration = "underline";
            listElement.style.fontWeight= "bold";

        }


    }


}