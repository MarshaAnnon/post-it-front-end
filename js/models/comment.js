class Comment {

    static all = []
    
    constructor(id, content, name, created_at){
        this.id = id
        this.content = content
        this.name = name
        this.created_at = created_at
        Comment.all.push(this)
    }
    
    static commentHTML(){
        return (`
            <h4>Would you like to add a comment?</h4>
            <form id="comment-form">
                <label for="content"></label><br>
                <textarea type="text" name="commentContent" rows="10" cols="60" placeholder="Spread the love..."> </textarea>
                <br>
                <label for="name"><h4>Name</h4></label>
                <input type="text" name="name" placeholder="your name">
                <br>
                <br>
                <input type="submit" value="Submit">
            <form>
        `)
    }

    renderComment(){
        const postContainer = document.getElementById("post-container")
        postContainer.innerHTML +=  `<div id="${this.id}">
                                        <p>${this.content}</p>
                                        <h5>${this.name}</h5>
                                    </div>`
    }
}