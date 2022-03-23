import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from "../api/data.js";


const template = (onSubmit) => html`
    <section id="registerPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Register</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">

                <label for="conf-pass" class="vhide">Confirm Password:</label>
                <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                <button type="submit" class="register">Register</button>

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

export function registerPage(ctx) {

    ctx.render(template(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        let userInput = new FormData(event.target);

        let email = userInput.get("email");
        let password = userInput.get("password");
        let confPassword = userInput.get("conf-pass");

        if (email.trim() === "" || password.trim() === "" || confPassword.trim() === "") {
            return alert("All fields are required!");
        }

        if (password !== confPassword) {
            return alert("Entered passwords doesn't match!");
        }

        console.log("here");

        await register(email, password);
        ctx.toggleNav();
        ctx.page.redirect("/");

    }


}