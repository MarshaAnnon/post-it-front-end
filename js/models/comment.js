class Comment {
    
    constructor(id, title, content, author_name, likes, created_at){
        this.id = id
        this.content = content
        this.name = name
        this.post_id = post_id
        this.created_at = created_at
        this.renderComment()       
    }
    
    static commentHTML(){
        return (
            `
            <div id="comment-form">
                <form>
                    <h4>Would you like to add a comment?</h4>
                    <label for="content"></label><br>
                    <textarea type="text" name="comment-content" rows="10" cols="80"        placeholder="Spread the love..."> </textarea>
                    <br>
                    <label for="name"><h4>Name</h4></label>
                    <input type="text" name="name" placeholder="your name">
                    <br>
                    <br>
                    <input type="submit" value="Submit">
                <form>
            </div>

        `
        )
    }

}