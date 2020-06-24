document.addEventListener("DOMContentLoaded", (e) =>{
    console.log("dom loaded")

    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(posts => {
        posts.forEach(post => {
            const {id, title, content, author_name, likes, created_at} = post
            new Post(id, title, content, author_name, likes, created_at)
        })
    })

})

