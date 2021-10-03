function validate() {
    let inputElement = document.getElementById("email");
    inputElement.addEventListener("change",()=>{
        if(!/[a-z]+@[a-z]+\.[a-z]+/g.test(inputElement.value)){
            inputElement.className="error";
        } else{
            inputElement.className="";
        }
    });
}