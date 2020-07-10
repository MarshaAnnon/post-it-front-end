class Post {
    
    static all = []
    
    constructor(id, title, content, author_name, likes, img, created_at, comments){
        this.id = id
        this.title = title
        this.content = content
        this.author_name = author_name
        this.likes = likes
        this.img = img
        this.created_at = created_at
        this.comments = comments
        Post.all.push(this)
             
    }

    postIndexHTML(){
        return (`
            <div id="${this.id}">
                <h4><span>${this.title}</span></h4>
                <img src="${this.img}" width="150" height="150" />
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
                <img src="${this.img}"  width="150" height="150" />
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


    