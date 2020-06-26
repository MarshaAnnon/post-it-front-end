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
//need to add a conditional to the like button so it only shows on the post show page and not with every post on the index page
    postHTML(){
        return (`
        <div id="${this.id}">
        <h3><span>${this.title}</span></h3>
        <h5>${this.created_at}</h5> 
        <p>${this.content}</p>
        <h5>${this.author_name}</h5>
        <h5 class="likes">${this.likes}</h5>
        <button onclick=API.likePost() type="button" id="like-button">Send Love</button>
        </div>
        `)
    }

    renderPost(){
        const postContainer = document.getElementById("post-container")
        const postCard = document.createElement("div")
        postCard.classList.add("post-card")
        postCard.innerHTML += this.postHTML()
        postContainer.appendChild(postCard)
        postCard.addEventListener("click", (e) => {
            this.showPost(e)
        })
    }

    showPost(e) {
        const postContainer = document.getElementById("post-container")
        const postID = parseInt(e.target.parentElement.id)
        debugger
        const postForm = document.getElementById("post-form")
        postContainer.innerHTML = ""
        postForm.innerHTML = ""
        
        API.addPost(postID)
    }

     
}


    