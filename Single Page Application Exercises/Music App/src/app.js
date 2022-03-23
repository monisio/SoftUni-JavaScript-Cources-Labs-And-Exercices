import page from "../node_modules/page/page.mjs";
import {render} from "../node_modules/lit-html/lit-html.js";
import {logout} from "./api/data.js";

import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {searchPage} from "./views/search.js";

let root = document.getElementById("main-content");
document.getElementById("logout").addEventListener("click", logOff);

toggleNav();


page("/", middleWare, homePage);
page("/login", middleWare, loginPage);
page("/register", middleWare,registerPage);
page("/catalog", middleWare, catalogPage);
page("/create", middleWare, createPage);
page("/details/:id", middleWare, detailsPage);
page("/edit/:id", middleWare,editPage);
page("/search", middleWare, searchPage);
page.start();







async function logOff(event) {
    event.preventDefault();
    await logout();
    toggleNav();
    page.redirect("/");
}


function middleWare(ctx, next) {
    ctx.render = renderView;
    ctx.toggleNav = toggleNav;
    next();

}

function renderView(page) {
    render(page, root);
}


function toggleNav() {
    let guestElements = Array.from(document.querySelectorAll(".guest"));
    let usersElements = Array.from(document.querySelectorAll(".user"));
    let token = sessionStorage.getItem("authToken");
    if (token) {
        guestElements.forEach(e => e.style.display = "none");
        usersElements.forEach(e => e.style.display = "inline-block");
    } else {
        guestElements.forEach(e => e.style.display = "inline-block");
        usersElements.forEach(e => e.style.display = "none");

    }

}