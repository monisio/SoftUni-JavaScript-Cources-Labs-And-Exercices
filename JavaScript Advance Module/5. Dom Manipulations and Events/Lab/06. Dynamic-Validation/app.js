function validate() {

    let emailInputElement = document.getElementById("email");
    emailInputElement.addEventListener("change", handler);

    function handler(event) {
        let emailEntryText = emailInputElement.value;

        let result = /\w+@\w+\.\w+/g.exec(emailEntryText);
        if(!result){
            event.currentTarget.className= "error" ;
        }else{
            event.currentTarget.className="";
        }

    }
}