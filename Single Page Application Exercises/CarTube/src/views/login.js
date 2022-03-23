import {html} from "../../node_modules/lit-html/lit-html.js";
import {login} from "../api/data.js";


const template = (onSubmit) => html`
    <section id="login">
        <div class="container">
            <form @submit=${onSubmit} id="login-form" action="#" method="post">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>

                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>`;


export async function loginPage(ctx) {
    ctx.render(template(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        let inputData = new FormData(event.target);
        let username = inputData.get("username");
        let password = inputData.get("password");

        if (!username || !password || username.trim() === "" || password.trim() === "") {
            return alert("Please, enter username and password!");
        }
        console.log(username);
        console.log(password);
        let result = await login(username, password);


        ctx.navChange();
        ctx.page.redirect("/all")

    }

}
