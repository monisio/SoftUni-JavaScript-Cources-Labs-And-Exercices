function toggle() {

    let buttonElement = document.querySelector("span.button");

    let hideShowPElement = document.getElementById("extra").style;

    let buttonText = buttonElement.textContent;
    if (buttonText === "More") {
        hideShowPElement.display = "block";
        buttonElement.textContent="Less";
    } else {
        hideShowPElement.display = "none";
        buttonElement.textContent="More"
    }


}