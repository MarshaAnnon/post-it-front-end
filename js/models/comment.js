class Comment {

    
    constructor(id, title, content, author_name, likes, created_at){
        this.id = id
        this.content = content
        this.name = name
        this.post_id = post_id
        this.created_at = created_at
        this.renderComment()
            
    }
//need to add a conditional to the like button so it only shows on the post show page and not with every post on the index page
    commentHTML(){
        return (`
        <h4>Would you like to add a comment?</h4>
            <label for="content"></label><br>
            <textarea type="text" name="${this.content}" rows="10" cols="80"  placeholder="Spread the love..."> </textarea>
            <br>
            <label for="name"><h4>Name</h4></label>
            <input type="text" name="${this.name}" placeholder="your name">
            <br>
            <input type="submit" value="Submit">
          </form>
        `
        )}

    renderComment(){
        const commentContainer = document.getElementById("comment-container")
        const commentCard = document.createElement("div")
        commentCard.classList.add("comment-card")
        commentCard.innerHTML += this.commentHTML()
        commentContainer.appendChild(commentCard)
        /*postCard.addEventListener("click", e => {
            if (e.target.className === "like") this.likeBtn(e)}*/ 
    }

}