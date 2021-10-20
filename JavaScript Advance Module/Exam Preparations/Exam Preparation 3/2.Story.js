class Story {

    constructor(title, creator) {

        this.title = title;
        this.creator = creator;

        this._comments = [];
        this._likes = [];

    }

    get likes() {
        let output = "";
        if (this._likes.length === 0) {
            output = `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            //define likes-bind username !!!
            output = `${this._likes[0]} likes the story!`
        } else {
            output = `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }

        return output;
    }

    like(username) {
        if (this._likes.some(e => e === username)) {
            let errorMessage = "";
            if (this.creator === username) {
                errorMessage = "You can't like your own story!";
            } else {
                errorMessage = "You can't like the same story twice!";
            }
            throw new Error(errorMessage);
        } else {
            this._likes.push(username);
        }

    }

    dislike(username) {

        let output = this._likes.splice(this._likes.indexOf(username), 1);
        if (output.length === 0) {
            throw new Error("You can't dislike this story!")
        } else {
            return `${username} disliked ${this.title}`
        }
    }


    comment(username, content, id) {
        let output = "";
        let existingComment = this._comments[Number(id) - 1]// this._comments[Number(id) - 1]: undefined ;
        if (!existingComment) {
            this._comments.push({
                username: username,
                id: (this._comments.length+1),
                content: content,
                replies: []
            });

            output= `${username} commented on ${this.title}`;
        } else {
            existingComment["replies"].push({
                id: Number((this._comments.indexOf(existingComment)+1) +"."+ (existingComment["replies"].length + 1)),
                username: username,
                content: content,

            })

            output= "You replied successfully"
        }

        return output;

    }


    toString(sortingType) {
        const sortingTypes={
            asc: (a,b)=>  a.id-b.id ,
            desc:(a,b)=> b.id-a.id,
            username:(a,b)=>  a.username.localeCompare(b.username),

        }

        let result = [];

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`likes: ${this._likes.length}`);
        result.push("Comments:")
        this._comments.sort((a,b)=> sortingTypes[sortingType](a,b)).forEach(c=>{
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`)
            c.replies.sort((a,b)=> sortingTypes[sortingType](a,b)).forEach(r=> result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
        })

        return result.join("\n");
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
