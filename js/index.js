document.addEventListener("domContentLoaded", (e) =>{
    
    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(posts => {
        posts.forEach(post => {
            const {id, title, content, author_name, likes, created_at} = post
            new Post(id, title, content, author_name, likes, created_at)
        })
    })

    //fetch(`http://localhost:3000/posts/${"id"}`)
    //.then(resp => resp.json())
    //.then(post => {
    //    postMessage.forEach(post => {
    //        const { id, name, title, content, author_name, likes } = post
    //        new Post = (id, name, title, content, author_name, likes)
    //    })
    //})
    
})

