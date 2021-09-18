function encodeAndDecodeMessages() {
    // add event listeners to buttons

    let buttons = document.querySelectorAll("button");

    buttons[0].addEventListener("click", encodeAndSent);
    buttons[1].addEventListener("click", decodeAndRead);

    function encodeAndSent() {

        let allTextAreas = document.getElementsByTagName("textarea");
        let textArea = allTextAreas[0];
        let recieverTextArea = allTextAreas[1];
        let textMessage = textArea.value;
        textArea.value = "";
        let encodedMessage = "";
        for (let i = 0; i < textMessage.length; i++) {
            encodedMessage += String.fromCharCode(textMessage.charCodeAt(i) + 1);

        }

        recieverTextArea.value = encodedMessage;


    }

    function decodeAndRead(event) {
        let divElement = event.currentTarget.parentElement;
        let textArea = divElement.getElementsByTagName("textarea")[0];
        let currentDecodedText = textArea.value;
        let decodedMessage = "";
        for (let i = 0; i < currentDecodedText.length ; i++) {
            decodedMessage += String.fromCharCode(currentDecodedText.charCodeAt(i) - 1);
        }
        textArea.value= decodedMessage;
    }

}