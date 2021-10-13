function lockedProfile() {
    document.getElementById("main");

    async function solve() {

        let users = await fetch("http://localhost:3030/jsonstore/advanced/profiles").then(body => body.json());

        Object.keys(users).forEach((pKey, i) => {
            let user = users[pKey];
            let userProfileElement = createHtmlProfile(i + 1, user.username, user.email, user.age);

        });
    }


}

function createHtmlProfile(id, name, email, age) {

    // <div className="profile">
    //      <img src="./iconProfile2.png" className="userIcon"/>
    //      <label>Lock</label>
    //      <input type="radio" name="user1Locked" value="lock" checked>
    //          <label>Unlock</label>
    //          <input type="radio" name="user1Locked" value="unlock"><br>
    //              <hr>
    //                  <label>Username</label>
    //                  <input type="text" name="user1Username" value="" disabled readOnly/>
    //                  <div id="user1HiddenFields">
    //                      <hr>
    //                          <label>Email:</label>
    //                          <input type="email" name="user1Email" value="" disabled readOnly/>
    //                          <label>Age:</label>
    //                          <input type="email" name="user1Age" value="" disabled readOnly/>
    //                  </div>
    //                  <button>Show more</button>
    //  </div>

    let profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");


    let imageElement = document.createElement("img");
    imageElement.src= "./iconProfile2.png";
    imageElement.classList.add("userIcon");
    profileDiv.appendChild(imageElement);

    let label = document.createElement("label");
    label.textContent= "Unlock";
    let radioButtonLock = document.createElement("input");
    radioButtonLock.type="radio";
    radioButtonLock.name=`User${id}Locked`;





    return profileDiv;

}