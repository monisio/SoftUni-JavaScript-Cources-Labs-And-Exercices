function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let texDiv = document.getElementById('extra');


    button.textContent = button.textContent==='More'?  'Less':'More';
    texDiv.style.display = texDiv.style.display=== 'block'?  'none':'block'


//     let buttonElement = document.querySelector("span.button");
//
//     let hideShowPElement = document.getElementById("extra").style;
//
//    /* let buttonText = buttonElement.textContent;
//     if (buttonText === "More") {
//         hideShowPElement.display = "block";
//         buttonElement.textContent="Less";
//     } else {
//         hideShowPElement.display = "none";
//         buttonElement.textContent="More"
//     }
// */

}