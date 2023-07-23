import { dateFormatter, deleteComment, changeCommentVote } from "../utils"
import { useState } from "react"

export const CommentListItem = (props) => {


const [failedDelete, setFailedDelete] = useState(false)
const [statusMessage, setStatusMessage] = useState("")
const [showButton, setShowButton] = useState(true)
const [deleted, setDeleted] = useState(false)

//state for voting
const [userVote, setUserVote] = useState(0)
const [voteMessage, setVoteMessage] = useState("Click arrow to up vote or down vote")


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


//voting functions
const upVote = () => {
    if (user === "Guest") {
        setVoteMessage("You must be logged in to vote!")
        return
    }


   setUserVote((currVote) => {
    if (currVote === 1) {
        setVoteMessage("You can only upvote once!")
        return 1
    } else if (currVote === -1) {
        setVoteMessage("Your vote has been reset to neutral, click again to upvote")
    } else {
        setVoteMessage("Thanks for giving your feedback!")
    }

    changeCommentVote(comment_id, 1)
    .catch(() => {
        
        setVoteMessage("Oops, your vote hasn't worked, try again")
        setUserVote(currVote)
    })

    return currVote + 1;
   })
}

const downVote = () => {

if (user === "Guest") {
    setVoteMessage("You must be logged in to vote!")
    return
}


    setUserVote((currVote) => {
     if (currVote === -1) {
         setVoteMessage("You can only downvote once!")
         return -1
     } else if (currVote === 1) {
         setVoteMessage("Your vote has been reset to neutral, click again to downvote")
     } else {
         setVoteMessage("Thanks for giving your feedback!")
     }

     changeCommentVote(comment_id, -1)
       .catch(() => {
        
        setVoteMessage("Oops, your vote hasn't worked, try again")
        setUserVote(currVote)
    })

     return currVote - 1;
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
            <p>Comment Votes: {votes + userVote} <span className="vote-arrows" onClick={upVote}>⬆️</span> <span className="vote-arrows" onClick={downVote}>⬇️</span> <span className="vote-message" >{voteMessage}</span></p>
            <p className={failedDelete ? "warning-text" : "loading-text"}>{statusMessage}</p>
            {ownComment && showButton ? <button onClick={handleDelete} className="del-button">Delete</button> : ""}
        </li>
    )

}