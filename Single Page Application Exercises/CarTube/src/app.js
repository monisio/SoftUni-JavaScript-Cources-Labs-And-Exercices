import page from "../node_modules/page/page.mjs";
import {render} from "../node_modules/lit-html/lit-html.js"
import {logout as apiLogout} from "./api/data.js";
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {allPage} from "./views/all.js";
import {detailsPage} from "./views/details.js";
import {createPage} from "./views/create.js";
import {editPage} from "./views/edit.js";
import {myPage} from "./views/my.js";
import {searchPage} from "./views/search.js"

const mainElement = document.getElementById("site-content");
const navLogoutElement = document.getElementById("logout");
navLogoutElement.addEventListener("click", logout)


navChange();

page("/", middleWare, homePage);
page("/login", middleWare, loginPage)
page("/register", middleWare, registerPage);
page("/all", middleWare, allPage);
page("/details/:id", middleWare , detailsPage);
page("/create" , middleWare, createPage);
page("/edit/:id", middleWare, editPage);
page("/my-cars", middleWare, myPage);
page("/by-year", middleWare, searchPage)
page.start();


function middleWare(ctx, next) {

    ctx.render = (content) => render(content, mainElement);
    ctx.navChange = navChange;
    next();
}



async function logout(event) {
    event.preventDefault();
    await apiLogout();
    navChange();
    page.redirect("/");
}


function navChange() {
    let guest = document.getElementById("guest");
    let user = document.getElementById("profile");
    let loggedIn = sessionStorage.getItem("authToken");

    if (loggedIn !== null) {
        guest.style.display = "none";
        user.style.display = "block";
        let profile = document.querySelector("#profile a");
        profile.textContent = "Welcome " + sessionStorage.getItem("username");
    } else {
        guest.style.display = "block";
        user.style.display = "none";
    }
}