class API {
    
    static addPosts(){
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then(posts => {
            posts.forEach(post => {
                const {id, title, content, author_name, likes, img, created_at, comments} = post
                new Post(id, title, content, author_name, likes, img, created_at, comments).renderPost()
            })
        })
    }

    static addNewPost(e){
        e.preventDefault() 
        let data = {
            'title': e.target.title.value,
            'img': e.target.image.value,
            'content': e.target.content.value,
            'author_name': e.target.author_name.value,
        }
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(() => {
            Post.clearPosts()
            API.addPosts()
            document.getElementById('post-form').reset()
        })
    }

    static addPost(id){
  
        fetch(`http://localhost:3000/posts/${id}`)
        .then(resp => resp.json())
        .then(post => {
            const {id, title, content, author_name, likes, img, created_at, comments} = post
            new Post(id, title, content, author_name, likes, img, created_at, comments).renderShowPost()
        })
    }

    static likePost(){
        const postID = parseInt(event.currentTarget.parentElement.id)
        let likes = parseInt(event.currentTarget.parentElement.querySelector(".likes").innerText)
        likes ++
        event.currentTarget.parentElement.querySelector(".likes").innerText = likes 
        let likeData = {
            'likes': likes   
        }
   
    fetch(`http://localhost:3000/posts/${postID}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(likeData)
        })
        .then(resp => resp.json())
        
    }

    static addComment(e){
        e.preventDefault()
        let cData = {
            'content': e.target.commentContent.value,
            'name': e.target.name.value,
            'post_id': parseInt(document.getElementsByClassName("post-card")[0].firstElementChild.id)  
        }
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(cData)
        })
        .then(resp => resp.json())
        .then(comment => {
            API.addPost(comment["post_id"])
            document.getElementById('comment-form').reset()
        })
    }
}

    

