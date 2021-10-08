function loadRepos() {

    let username = "https://api.github.com/users/" + document.getElementById("username").value + "/repos";
    let reposElement = document.getElementById("repos");
    for (let child of reposElement.children) {
        child.remove();
    }


    fetch(username)
        .then((responce) =>{
           if(responce.status!== 200){
               reposElement.textContent= "Error server response status : "+responce.status;
           }else{

               responce.json()
           }
        } )
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                let liNewElement = document.createElement("li");
                let aNewElement = document.createElement("a");
                aNewElement.textContent = data[i].full_name;
                aNewElement.href = data[i].html_url;
                liNewElement.appendChild(aNewElement);
                reposElement.appendChild(liNewElement);
            }

        }).catch(reject=> console.log(reject));

}