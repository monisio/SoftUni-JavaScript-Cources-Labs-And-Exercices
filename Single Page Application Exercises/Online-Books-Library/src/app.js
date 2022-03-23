import page from "../node_modules/page/page.mjs";
import {render} from "../node_modules/lit-html/lit-html.js";

import {dashboardPage} from "./views/dashboard.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {addPage} from "./views/add.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {myPage} from "./views/my.js";
import {logout} from "./api/data.js";

setNavBar();
document.querySelector("#logoff").addEventListener("click", logOff)
let mainContainer = document.getElementById("site-content");


page("/", middleWare, dashboardPage);
page("/login", middleWare, loginPage);
page("/register", middleWare, registerPage);
page("/add", middleWare, addPage);
page("/details/:id", middleWare, detailsPage);
page("/edit/:id", middleWare,editPage);
page("/my-books", middleWare, myPage);
page.start();


function middleWare(ctx, next) {
    ctx.render = (view) => render(view, mainContainer);
    ctx.setNavBar = setNavBar;
    next();
}

function setNavBar() {

    let authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
        document.querySelector("#guest").style.display= "block";
        document.querySelector("#user").style.display= "none";

    } else {
        document.querySelector("#guest").style.display= "none";
        document.querySelector("#user").style.display= "block";
        document.querySelector("#user span").textContent="Welcome, "+sessionStorage.getItem("userEmail");
    }
}

async function logOff(event) {
    event.preventDefault();
    await logout();
    setNavBar()
    page.redirect("/");
}