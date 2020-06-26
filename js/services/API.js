class API {
    
    static addPosts(){
    
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then(posts => {
            posts.forEach(post => {
                const {id, title, content, author_name, likes, created_at} = post
                new Post(id, title, content, author_name, likes, created_at)
            })
        })
    }

    static addPost(id){
        // write our fetch and send it to our back end
  
        fetch(`http://localhost:3000/posts/${id}`)
        // grab our fetch response
        .then(resp => resp.json())
        .then(post => {
            const {title, content, author_name, likes, created_at} = post
            new Post(title, content, author_name, likes, created_at)
           
        })
    }

    static likePost(){
        const postID = parseInt(event.currentTarget.parentElement.id)
        let likes = parseInt(event.currentTarget.parentElement.querySelector(".likes").innerText)
        likes ++
        event.currentTarget.parentElement.querySelector(".likes").innerText = likes //this could go on 47
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
        // grab our fetch response
        .then(resp => resp.json())
        
    }


    static addComment(e){
        e.preventDefault()
        // capture our form data
        let data = {
        
            'content': e.target.content.value,
            'name': e.target.name.value,
        }
        // write our fetch and send it to our back end
        
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // grab our fetch response
        .then(resp => resp.json())
        .then(post => {
            const {title, content, author_name, likes, created_at} = post
            new Post(title, content, author_name, likes, created_at)
            document.getElementById('post-form').reset()
        })
    }
}

    

