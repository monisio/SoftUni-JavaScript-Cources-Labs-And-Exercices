function attachEvents() {
    document.getElementById("submit").addEventListener("click", createMessage);
    document.getElementById("refresh").addEventListener("click", getMessages);

    async function getMessages() {
        let textArea = document.getElementById("messages");
        textArea.disabled = false


        let url = "http://localhost:3030/jsonstore/messenger";

        let result = await fetch(url).then(body => body.json());
        let resultString = ""
        for (const key in result) {
            resultString += `${result[key].author}: ${result[key].content}\n`
        }

        textArea.value = resultString;
    }


    async function createMessage() {

        let authorInput = document.getElementById("author");
        let contentInput = document.getElementById("content");
        let url = "http://localhost:3030/jsonstore/messenger";

        let newMessage = {
            author: authorInput.value,
            content: contentInput.value
        }

        let createResponse = await fetch(url, {
            headers: {"Content-type": "application/json"},
            method: "Post",
            body: JSON.stringify(newMessage)
        })

        let createResult = createResponse.json();

        console.log(createResult);


    }

}

attachEvents();