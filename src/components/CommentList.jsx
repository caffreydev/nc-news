import { getComments } from "../utils"
import { CommentListItem } from "./"
import { useState, useEffect } from "react"


export const CommentList = (props) => {

    const {articleId} = props

    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
  
    const errMsg = "Something went wrong loading comments, try reloading the page" 
    //in theory this error should be impossible to trigger with user error as an invalid article ID would be caught in its parent

    useEffect(() => {
        setError(false)
        setLoading(true)
        
        getComments(articleId)
        .then((comments) => {
            setLoading(false)
            setResult(comments)
        })
        .catch((e) => {
            setLoading(false)
            setError(true)
        })
    }, [props.commentPosted])

    if (error) {
        return <p className="warning-text">{errMsg}</p>
    } else if (loading) {
        return <p className="loading-text">Please wait while comments load</p>
    } else if (result.length === 0) {
        return (
            <>
        <h2>Comments:</h2>
        <p>No comments yet, why not be the first to comment?!</p>
            </>
    )}

    return (
        <section>
            <h2>Comments</h2>
        <ul className="comment-list">

        {result.map((comment) => {
            return <CommentListItem comment={comment} key={comment.comment_id} user={props.user} />
        })}
        </ul>
        </section>
        )


}