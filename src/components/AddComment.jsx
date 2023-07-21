import { useState, useEffect } from "react"
import { postComment } from "../utils"

export const AddComment = (props) => {
    
if (props.user === "Guest") {
    return <h3>Welcome guest, log in to join the disucssion and post a comment!</h3>
}


const [newComment, setNewComment] = useState('')
const [commentPending, setCommentPending] = useState(false)
const [commentSuccess, setCommentSuccess] = useState(false)
const [commentFailure, setCommentFailure] = useState(false)
const [commentMessage, setCommentMessage] = useState("")


const handleSubmit = (e) => {
    e.preventDefault()
    
    if (newComment === "") {
        return
    }
    
    props.setCommentPosted(false)
    setCommentPending(true)
    setCommentMessage("Comment pending")
    setCommentFailure(false)
    setCommentSuccess(false)

    const commentBody = {
        username: props.user,
        body: newComment
    }


    return postComment(props.articleId, commentBody)
    .then(() => {
        setCommentPending(false)
        setCommentSuccess(true)
        setNewComment("")
        setCommentMessage("Comment posted, thanks for engaging!")
        props.setCommentPosted(true)
    })
    .catch((e) => {
        setCommentPending(false)
        setCommentFailure(true)
        setCommentMessage("Oops, the comment wasn't posted, please try again!")
    })
}

const updateComment = (e) => {
    setCommentPending(false)
    setCommentSuccess(false)
    setCommentFailure(false)
    setNewComment(e.target.value)
}

return (<form className="comment-form" target="" onSubmit={handleSubmit}>
    <textarea placeholder="I think this article is really interesting because ..." disabled={commentPending} value={newComment} onChange={updateComment}/>
    <input type="submit" value="Add Comment" disabled={commentPending}/>
    <p className={commentFailure ? "warning-text" : commentPending ? "loading-text" : "success-text"}
    >{commentMessage}</p>
</form>)



}