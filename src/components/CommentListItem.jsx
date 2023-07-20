import { dateFormatter, deleteComment } from "../utils"
import { useState } from "react"

export const CommentListItem = (props) => {


const [failedDelete, setFailedDelete] = useState(false)
const [statusMessage, setStatusMessage] = useState("")
const [deleted, setDeleted] = useState(false)

    const {comment, user} = props
    const {body, votes, author, created_at, comment_id} = comment

    let ownComment = author === user;



 
    const handleDelete = () => {
        setStatusMessage("Please wait while comment is deleted")
        setFailedDelete(false)
        deleteComment(comment_id)
        .then(() => {
            setDeleted(true)
        })
        .catch(() => {
            setFailedDelete(true)
            setStatusMessage("Comment was not deleted, please try again")
        })

    }


    if (deleted) {
        return <p className="success-text">Comment Deleted</p>
    }


    return (
        <li>
            <h4>Penned by {author} on {dateFormatter(created_at)}</h4>
            <p>{body}</p>
            <p>Current votes: {votes}</p>
            <p className={failedDelete ? "warning-text" : "loading-text"}>{statusMessage}</p>
            {ownComment ? <button onClick={handleDelete} className="del-button">Delete</button> : ""}
        </li>
    )

}