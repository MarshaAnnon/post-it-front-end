class Post {
    static all = []
    
    constructor(id, title, content, author_name, likes, created_at){
        this.id = id
        this.title = title
        this.content = content
        this.author_name = author_name
        this.likes = likes
        this.created_at = created_at
        Post.all.push(this)//collecting all of the objects removes the need to call to call the fetch again, by storing the objects in the frontend. Depends on how the data is being loaded. Make sure the created data is being added to the all array. Make sure the static = [] keeps up with the creation.
        this.renderPost()
            
    }

//need a helper method for this.created_at
    postHTML(){
        return (`
        <H3>${this.title}</H3>
        <h5>${this.created_at}</h5> 
        <p>${this.content}</p>
        <h5>${this.author_name}</h5>
        <button>${this.likes}</button>
        `)
    }

    renderPost(){
        
    
        const postContainer = document.getElementById("post-container")
        const postCard = document.createElement("div")
        
        postCard.classList.add("post-card")
        
        postCard.innerHTML += this.postHTML()
        postContainer.appendChild(postCard)
        /*postCard.addEventListener("click", e => {
            if (e.target.className === "like") this.likeBtn(e)}*/
        
    }
        
}
// render all posts to the page
// update post with likes
// access to show post page
// likes button on each post
