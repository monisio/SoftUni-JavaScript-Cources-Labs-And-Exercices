import {html} from "../../node_modules/lit-html/lit-html.js";
import {getDetails, deleteBook, like, checkIfLiked, getLikes} from "../api/data.js";


const template = (book, isOwner, isLoggedIn, userNotLiked, likesCount, onDelete, likeFunction) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${isOwner ? html`<a class="button" href=${"/edit/" + book._id}>Edit</a> <a class="button" @click=${onDelete} href=javascript:void(0)>Delete</a>` : ""}
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${getLikeButton(isOwner, isLoggedIn, userNotLiked, book._id, likeFunction)}
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes"> ${"Likes: " +likesCount}</span>
                </div>
                
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>`;


let getLikeButton = (isOwner, isLoggedIn, userNotLiked, id, likeFunction) => {

    if (isOwner===false && isLoggedIn && userNotLiked) {
        return html`<a @click=${likeFunction} class="button" href="javascript:void(0)">Like</a>`;
    } else {
        return null;
    }


}

export async function detailsPage(ctx) {
    let id = ctx.params.id;

    let result = await getDetails(id);

    //bonus likes functionality
    let likesCount = await getLikes(id);

    let isLoggedIn = sessionStorage.getItem("authToken")!== null;
    let userNotLiked ;
    if (isLoggedIn) {
        userNotLiked = await checkIfLiked(id, sessionStorage.getItem("userId"))===0;
    }
    let isOwner = result._ownerId === sessionStorage.getItem("userId");


    ctx.render(template(result, isOwner, isLoggedIn, userNotLiked, likesCount, onDelete, likeFunction));


    async function likeFunction(event) {
        event.preventDefault();
        await like(id);
        ctx.page.redirect("/details/" + result._id);

    }

    async function onDelete(event) {
        event.preventDefault();

        let id = result._id;

        await deleteBook(id);

        ctx.page.redirect("/");
    }

}