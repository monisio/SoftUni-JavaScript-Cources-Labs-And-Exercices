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
            output = `${this._likes[0]} likes this story!`
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
        return `${username} liked ${this.title}!`
    }

    dislike(username) {

        let index = this._likes.indexOf(username)
        if (index === -1) {
            throw new Error("You can't dislike this story!")
        } else {
            this._likes.splice(index, 1)
            return `${username} disliked ${this.title}`
        }
    }


    comment(username, content, id) {
        let output = "";
        let existingComment = this._comments.find(c=> c.id === id);
        if (!existingComment) {
            this._comments.push({
                username: username,
                id: (this._comments.length + 1),
                content: content,
                replies: []
            });

            output = `${username} commented on ${this.title}`;
        } else {
            existingComment["replies"].push({
                id: Number((this._comments.indexOf(existingComment) + 1) + "." + (existingComment["replies"].length + 1)),
                username: username,
                content: content,

            })

            output = "You replied successfully"
        }

        return output;

    }


    toString(sortingType) {
        const sortingTypes = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),

        }

        let result = [];

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push("Comments:")
        if(this._comments.length>0){
            this._comments.sort((a, b) => sortingTypes[sortingType](a, b)).forEach(c => {
                result.push(`-- ${c.id}. ${c.username}: ${c.content}`)
                c.replies.sort((a, b) => sortingTypes[sortingType](a, b)).forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
            })
        }


        return result.join("\n");
    }
}