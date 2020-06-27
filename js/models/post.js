class Post {
    
    static all = []
    
    constructor(id, title, content, author_name, likes, created_at, comments){
        this.id = id
        this.title = title
        this.content = content
        this.author_name = author_name
        this.likes = likes
        this.created_at = created_at
        this.comments = comments
        Post.all.push(this)//collecting all of the objects removes the need to call to call the fetch again, by storing the objects in the frontend. Depends on how the data is being loaded. Make sure the created data is being added to the all array. Make sure the static = [] keeps up with the creation.
             
    }

//need a helper method for this.created_at
//need to add a conditional to the like button so it only shows on the post show page and not with every post on the index page
    postIndexHTML(){
        return (`
            <div id="${this.id}">
                <h4><span>${this.title}</span></h4>
                <h5>${this.created_at}</h5> 
                <p>${this.content}</p>
                <h5>${this.author_name}</h5>
                <h5 class="likes">${this.likes}</h5>
                <i class="fa fa-heart" aria-hidden="true" onclick=API.likePost()></i>
        `)
    }

    postShowHTML(){
        return (`
            <div id="${this.id}">
                <h4><span>${this.title}</span></h4>
                <h5>${this.created_at}</h5> 
                <p>${this.content}</p>
                <h5>${this.author_name}</h5>
                <h5 class="likes">${this.likes}</h5>
                <i class="fa fa-heart" aria-hidden="true" onclick=API.likePost()></i>
                ${this.comments.map(function(comment){
                    return(`
                    <div id="${comment.id}">
                        <p>${comment.content}</p>
                        <h5>${comment.name}</h5>
                    </div>
                `)
                })}
            </div>
        `)
    }
            

    renderPost(){
        const postContainer = document.getElementById("post-container")
        const postCard = document.createElement("div")
        postCard.classList.add("post-card")
        postCard.innerHTML += this.postIndexHTML()
        postContainer.appendChild(postCard)
        postCard.querySelector("h4").addEventListener("click", (e) => {
            this.showPost(e)
        })
        
    }

    renderShowPost(){
        const postContainer = document.getElementById("post-container")
        postContainer.innerHTML = ""
        const postCard = document.createElement("div")
        postCard.classList.add("post-card")
        postCard.innerHTML += this.postShowHTML()
        postContainer.appendChild(postCard)
    }

    showPost(e) {
        const postContainer = document.getElementById("post-container")
        
        const postForm = document.getElementById("post-form")
        postContainer.innerHTML = ""
        postForm.innerHTML = ""

        if (Number(e)){
            const postID = e
            API.addPost(postID)
        }else{
            const postID = parseInt(e.target.parentElement.parentElement.id)
            API.addPost(postID)
        }
        
        let comForm = document.getElementById("comment-container")
        comForm.innerHTML += Comment.commentHTML()
    }

    static clearPosts(){
        const postContainer = document.getElementById("post-container")
        postContainer.innerHTML = ""
    }


}


    