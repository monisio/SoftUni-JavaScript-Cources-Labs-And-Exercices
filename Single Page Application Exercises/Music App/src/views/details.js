import {html} from "../../node_modules/lit-html/lit-html.js";
import {getDetailsAlbum, deleteAlbum} from "../api/data.js";




const template= (album , isOwner, onDelete)=>html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src=${album.imgUrl}>
            </div>
            <div class="albumInfo">
                <div class="albumText">

                    <h1>${"Name: "+album.name}</h1>
                    <h3>${"Artist: "+album.artist}</h3>
                    <h4>${"Genre: "+album.genre}</h4>
                    <h4>${"Price: $"+album.price}</h4>
                    <h4>${"Date: "+ album.releaseDate}</h4>
                    <p>${"Description: "+album.description}</p>
                </div>

                ${isOwner? html`<div class="actionBtn">
                    <a href=${"/edit/"+ album._id} class="edit">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                </div>`:""}
                
            </div>
        </div>
    </section>
`;



export async function detailsPage(ctx){
    let result = await getDetailsAlbum(ctx.params.id);
    console.log(result);

    let isOwner = sessionStorage.getItem("userId")===result._ownerId;

    ctx.render(template(result,isOwner,onDelete));


    async function onDelete(event){
        event.preventDefault();

       let confirmed =   confirm("Are you sure you want to delete this album?");
       if(confirmed){
           await deleteAlbum(result._id);
           ctx.page.redirect("/catalog");
       }

    }

}