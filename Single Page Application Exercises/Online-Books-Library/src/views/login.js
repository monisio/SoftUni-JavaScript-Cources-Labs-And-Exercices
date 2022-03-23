import {html} from "../../node_modules/lit-html/lit-html.js";
import {login} from "../api/data.js";



const template = (onSubmit) => html`
    <section id="login-page" class="login">
        <form @submit=${onSubmit} id="login-form" action="" method="">
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>`;


export async function loginPage(ctx) {
    ctx.render(template(onSubmit));


    async function onSubmit(event) {
        event.preventDefault();

        let userInput = new FormData(event.target);

        let email = userInput.get("email");
        let password = userInput.get("password");
        if (!email||email.trim()===""||!password||password.trim()==="" ){
            window.alert("Please enter username and password!");
            return
        }


        let data = await login(email, password);


        ctx.page.redirect("/");

    }

}