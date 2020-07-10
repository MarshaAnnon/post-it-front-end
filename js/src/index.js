document.addEventListener("DOMContentLoaded", (e) => {
    API.addPosts()
    document.getElementById('form').addEventListener("submit", API.addNewPost)
    document.querySelectorAll("h3")
    document.getElementById('comment-container').addEventListener("submit", API.addComment)
})

    

    







