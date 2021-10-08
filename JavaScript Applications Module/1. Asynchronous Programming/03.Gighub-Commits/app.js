function loadCommits() {
    let commitsResultElement = document.getElementById("commits");
    let username = document.getElementById("username").value;
    let repository = document.getElementById("repo").value;

    let url = `https://api.github.com/repos/${username}/${repository}/commits`


    fetch(url).then((response)=>{
      if(!response.ok){
          throw new Error("Error"+response.status +response.statusText);
      }else{
        return   response.json()
      }
    }).then((result)=> {
        for (let i = 0; i <result.length; i++) {
          let newElement =  document.createElement("li");
          newElement.textContent= result[i].commit.author.name +" : "+ result[i].commit.message;
          commitsResultElement.appendChild(newElement);
        }

    }).catch(error=> {
        let  errorMessageElement = document.createElement("li");
        errorMessageElement.textContent= error.message;
        commitsResultElement.appendChild(errorMessageElement);
    })


}