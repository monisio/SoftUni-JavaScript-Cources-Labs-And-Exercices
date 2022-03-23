import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from "../api/data.js";


const template = (onSubmit) => html`
    <section id="register">
        <div class="container">
            <form @submit=${onSubmit} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>

                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>

                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>`;


export async function registerPage(ctx) {
    ctx.render(template(onSubmit));


    async function onSubmit(event) {
        event.preventDefault();

        let userInput = new FormData(event.target);
        let username = userInput.get("username");
        let password = userInput.get("password");
        let repass = userInput.get("repeatPass");

        if (!username || !password || !repass || username.trim() === "" || password.trim() === "" || repass.trim() === "") {
            return alert("All field are required");
        }

        if (password !== repass) {
            return alert("Passwords doesn't match!");
        }


        await register(username, password);

        ctx.navChange();
        ctx.page.redirect("/all");

    }


}