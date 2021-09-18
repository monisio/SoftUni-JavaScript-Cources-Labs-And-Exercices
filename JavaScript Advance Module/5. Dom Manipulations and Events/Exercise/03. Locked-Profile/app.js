function lockedProfile() {
    let buttonElements = document.querySelectorAll("div button");
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener("click", handler);

    }


    function handler(event) {

        let profileElement = event.currentTarget.parentElement;
        let unlockButton = profileElement.querySelector("input:checked");
        if (unlockButton.value !== "lock") {
            if (profileElement.querySelector("button").textContent === "Show more") {
                profileElement.querySelector("div").style.display = "inline-block";
                profileElement.querySelector("button").textContent = "Hide all"
            } else {
                profileElement.querySelector("div").style.display = "none";
                profileElement.querySelector("button").textContent = "Show more"
            }

        }





    }


    /*function lockedProfile() {
    let buttonElements = document.querySelectorAll("div button");
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener("click", handler);

    }


    function handler(event) {

        let profileElement = event.currentTarget.parentElement;
        let unlockButton = profileElement.querySelector("input:checked");
        if (unlockButton.value !== "lock") {
            if (profileElement.querySelector("button").textContent === "Show more") {
                profileElement.querySelector("div").style.display = "inline-block";
                profileElement.querySelector("button").textContent = "Hide all"
            } else {
                profileElement.querySelector("div").style.display = "none";
                profileElement.querySelector("button").textContent = "Show more"
            }

        }


    }


}*/


}