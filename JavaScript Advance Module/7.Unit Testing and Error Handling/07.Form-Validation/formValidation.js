function validate() {

    // /^[A-Za-z0-9]{3,20}$/ -  length 3 - 20  username check
    // /^[\w]{5,15}$/   -  length  5- 15 password
    // /^[^@.]+@[^@]*\.[^@]*$/ - email

    let buttonElement = document.getElementById("submit");
    let usernameElement = document.getElementById("username");
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    let confirmPasswordElement = document.getElementById("confirm-password");
    let companyCheckboxElement = document.getElementById("company");
    let companyInfoBox = document.getElementById("companyInfo");
    let companyNumberElement=document.getElementById("companyNumber");


    companyCheckboxElement.addEventListener("change", (e) => {
        companyInfoBox.style.display = companyCheckboxElement.checked===true  ?
            "block" : "none";
    });

    buttonElement.addEventListener("click", (e) => {
        e.preventDefault();
        let username = usernameElement.value;
        let email = emailElement.value;
        let password = passwordElement.value;
        let confirmPassword = confirmPasswordElement.value;

        let isValid = true;

        if ( !/^[A-Za-z0-9]{3,20}$/.test(username)) {
            usernameElement.style.borderColor = "red";
            isValid = false;
        } else {
            usernameElement.style.borderColor = "";
        }

        if (!/^[^@.]+@[^@]*\.[^@]*$/.test(email)) {
            isValid = false;
            emailElement.style.borderColor = "red";
        } else {
            emailElement.style.borderColor = "";
        }

        if(!/^[\w]{5,15}$/.test(password)||password!==confirmPassword){
            isValid= false;
            passwordElement.style.borderColor="red";
            confirmPasswordElement.style.borderColor="red";
        }else{
            passwordElement.style.borderColor="";
            confirmPasswordElement.style.borderColor="";
        }

        if(companyInfoBox.style.display==="block"){
          let companyNumber =Number(companyNumberElement.value);
          if(companyNumber<1000|| companyNumber>9999){
              isValid= false;
              companyNumberElement.style.borderColor="red";
          }else {
              companyNumberElement.style.borderColor="";
          }


        }

        if(isValid){
            document.getElementById("valid").style.display="block";
        }else {
            document.getElementById("valid").style.display="none";
        }



    });


}
