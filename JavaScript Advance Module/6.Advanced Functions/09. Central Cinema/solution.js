function solve() {

    document.querySelector("#container button").addEventListener("click", addMovie);
    document.querySelector("#archive button").addEventListener("click", clearAllArchived);
    let result = document.querySelector("#movies ul");
    let archiveElement = document.querySelector("#archive ul");


    let inputElements = document.querySelectorAll("#container input");

    function addMovie(e) {
        e.preventDefault();
        let [name, hall, ticketPrice] = Array.from(inputElements).map(e => e.value);
        Array.from(inputElements).map(e => e.value = "");
        if (name==="" || hall==="" || ticketPrice==="" || !Number(ticketPrice)) {
            return
        }

        let liMainElement = document.createElement("li");

        let nameSpan = document.createElement("span");
        let hallStrong = document.createElement("strong");
        nameSpan.textContent = name;
        hallStrong.textContent = "Hall: " + hall;
        liMainElement.appendChild(nameSpan);
        liMainElement.appendChild(hallStrong);

        let innerDivMain = document.createElement("div");

        let priceStrong = document.createElement("strong");
        priceStrong.textContent = Number(ticketPrice).toFixed(2);
        innerDivMain.appendChild(priceStrong);
        let inputElement = document.createElement("input");
        inputElement.placeholder = "Ticket sold";
        innerDivMain.appendChild(inputElement);
        let archiveButton = document.createElement("button");
        archiveButton.textContent = "Archive";
        archiveButton.addEventListener("click", archiveMovie);
        innerDivMain.appendChild(archiveButton);
        liMainElement.appendChild(innerDivMain);


        result.appendChild(liMainElement);


        function archiveMovie() {

            let ticketInputValue = Number(inputElement.value);
            if (!(ticketInputValue)|| ticketInputValue===0) {
                return;
            }


            let ticketsTotal = `Total amount: ${(Number(ticketPrice) * ticketInputValue).toFixed(2)}`;
            liMainElement.removeChild(innerDivMain);
            liMainElement.removeChild(hallStrong);
            hallStrong.textContent = ticketsTotal;
            liMainElement.appendChild(hallStrong);
            archiveButton.textContent = "Delete";
            archiveButton.addEventListener("click",deleteArchivedItem);
            liMainElement.appendChild(archiveButton);
            archiveElement.appendChild(liMainElement);
            result.removeChild(liMainElement);


        }

    }


    function deleteArchivedItem(e) {
        //e.preventDefault();
        e.currentTarget.parentElement.remove();

    }


    function clearAllArchived(e) {
        let listOfAllItems = e.currentTarget.parentElement.querySelectorAll("ul li");
        listOfAllItems.forEach(e => e.remove());
    }

}




