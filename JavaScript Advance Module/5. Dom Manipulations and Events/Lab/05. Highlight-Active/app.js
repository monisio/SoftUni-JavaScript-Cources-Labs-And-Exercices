function focused() {


    let element = document.querySelectorAll("div div input");

    for (const inputField of element) {
        inputField.addEventListener("focus", handler);
        inputField.addEventListener("blur", blurring);
    }

    function handler(event) {
        event.currentTarget.parentNode.className = "focused";

    }

    function blurring(event) {
        event.currentTarget.parentNode.className = "";
    }

}