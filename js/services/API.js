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

    static addPost(e){
        e.preventDefault()
        // capture our form data
        let data = {
        
            'title': e.target.title.value,
            'content': e.target.content.value,
            'author_name': e.target.author_name.value,
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
