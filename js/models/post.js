class Post {
    
    static all = []
    
    constructor(id, title, content, author_name, likes, created_at){
        this.id = id
        this.title = title
        this.content = content
        this.author_name = author_name
        this.likes = likes
        this.created_at = created_at
        this.renderPost()
        Post.all.push(this)    
    }

    postHTML(){

    }

    renderPost(){
        console.log("this works??")
    }

}
// render all posts to the page
// update post with likes
// access to show post page
// likes button on each post
