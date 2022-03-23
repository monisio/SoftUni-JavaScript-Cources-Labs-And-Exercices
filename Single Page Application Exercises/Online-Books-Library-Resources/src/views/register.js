import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from "../api/data.js";



const template= (onSubmit)=> html`
 <section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`;


export async  function registerPage(ctx){
    ctx.render(template(onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        let userInput = new FormData(event.target);
       console.log();

       if(Array.from(userInput.values()).some(e=>e.trim()==="")){
           alert("Please fill all fields!")
           return
       }

       if (userInput.get("password")!== userInput.get("confirm-pass")){
           alert("Entered passwords doesn't match");
           return

       }

       await register(userInput.get("email"), userInput.get("password"))


       ctx.page.redirect("/");
    }

}