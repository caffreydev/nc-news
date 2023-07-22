import { dateFormatter, deleteComment } from "../utils"
import { useState } from "react"

export const CommentListItem = (props) => {


const [failedDelete, setFailedDelete] = useState(false)
const [statusMessage, setStatusMessage] = useState("")
const [showButton, setShowButton] = useState(true)
const [deleted, setDeleted] = useState(false)


    const {comment, user} = props
    const {body, votes, author, created_at, comment_id, avatar_url} = comment

   
  const ownComment = author === user

    const handleDelete = () => {
        setStatusMessage("Please wait while comment is deleted")
        setShowButton(false)
        setFailedDelete(false)
        deleteComment(comment_id)
        .then(() => {
            setDeleted(true)
        })
        .catch(() => {
            setFailedDelete(true)
            setShowButton(true)
            setStatusMessage("Comment was not deleted, please try again")
        })

    }


    if (deleted) {
        return <p className="success-text">Comment Deleted</p>
    }


    return (
        <li>
            <div className="comment-author-wrapper">
            <h4>Penned by {author} on {dateFormatter(created_at)}</h4>
            <img className="comment-avatar" src={avatar_url} alt="user avatar"/>
            </div>
            <p>{body}</p>
            <p>Current votes: {votes}</p>
            <p className={failedDelete ? "warning-text" : "loading-text"}>{statusMessage}</p>
            {ownComment && showButton ? <button onClick={handleDelete} className="del-button">Delete</button> : ""}
        </li>
    )

}