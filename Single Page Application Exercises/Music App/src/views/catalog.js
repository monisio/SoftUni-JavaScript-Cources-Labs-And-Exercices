import {html} from "../../node_modules/lit-html/lit-html.js";
import {getAllAlbums} from "../api/data.js";


const template = (albums) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>

        ${albums.length > 0 ? albums.map( singleAlbumCard) : html`<p>No Albums in Catalog!</p>`}

    </section>
`;


export function singleAlbumCard(album) {
    let isLogged = sessionStorage.getItem("userId") !== null;
    return html`
        <div class="card-box">
            <img src=${album.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">${"Name: " + album.name}</p>
                    <p class="artist">${"Artist: " + album.artist}</p>
                    <p class="genre">${"Genre: " + album.genre}</p>
                    <p class="price">${"Price: $" + album.price}</p>
                    <p class="date">${"Release Date: " + album.releaseDate}</p>
                </div>
                ${isLogged ? html`
                    <div class="btn-group">
                        <a href=${"/details/" + album._id} id="details">Details</a>
                    </div>` : ""}
            </div>
        </div>`;

}


export async function catalogPage(ctx) {
    let result = await getAllAlbums();

    ctx.render(template(result));
}