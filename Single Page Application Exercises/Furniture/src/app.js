import page from '../node_modules/page/page.mjs'
import {render} from '../node_modules/lit-html/lit-html.js';

import {logout} from "./api/data.js";
import {createPage} from "./views/create.js";
import {dashboardPage} from "./views/dashboard.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {registerPage} from "./views/register.js";
import {myItemsPage} from "./views/mypage.js";
import {loginPage} from "./views/login.js";

//CODE FOR TESTING PURPOSE IN BROWSER
// import all from folder in order to test functions in browser
import * as api from "./api/data.js"
//attach imported functions to the global scope (browser window)
window.api = api;


//router setup :
page('/', renderMiddleware, dashboardPage);
page('/details/:id', renderMiddleware, detailsPage);
page('/create', renderMiddleware, createPage);
page('/edit/:id', renderMiddleware, editPage);
page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);
page('/my-furniture', renderMiddleware, myItemsPage);

const mainContainer = document.querySelector(".container");

document.getElementById("logoutBtn").addEventListener("click", async () => {
    await logout();
    setUserNavigation();
    page.redirect("/");

})

setUserNavigation();
page.start();

function setUserNavigation() {
    let userId = sessionStorage.getItem("userId");
    if (userId !== null) {
        document.getElementById("guest").style.display = "none";
        document.getElementById("user").style.display = "inline-block";

    } else {
        document.getElementById("guest").style.display = "inline-block";
        document.getElementById("user").style.display = "none";
    }

}


function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, mainContainer);
    ctx.setUserNavigation = setUserNavigation;
    next();
}