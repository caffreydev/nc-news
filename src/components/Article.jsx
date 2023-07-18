import { useEffect, useState } from "react"
import { getArticle, dateFormatter, changeArticleVote } from "../utils"
import { useParams } from "react-router-dom"
import { CommentList } from "./"

export const Article = () => {

    //state for article
    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errMsg, setErrMsg] = useState("Something went wrong, please navigate back to the Articles list and try again")
    const [userVote, setUserVote] = useState(0)
    const [voteMessage, setVoteMessage] = useState("Click arrow to up vote or down vote")

    useEffect(() => {
        setUserVote(0)
        setVoteMessage("Click arrow to up vote or down vote")
    }, [window.location.hash]) //resets optimistic rendering when switching article via url




const {articleId} = useParams();

    useEffect(() => {
        setLoading(true)
        setError(false)
        getArticle(articleId)
        .then((result) => {
            setResult(result)
            setLoading(false)
        })
        .catch((e) => {
            if (e.message.includes(400)) {
                setErrMsg("Articles only have integer id numbers, try selecting one from the Articles list to get an example")
            } else if (e.message.includes(404)) {
                setErrMsg("There is no article with this id number!  Try selecting from the Articles list")
            } else {
                setErrMsg("Something went wrong, please navigate back to the Articles list and try again")
            }
            setLoading(false)
            setError(true)
        }) 
    }, [articleId])


//voting functions
const upVote = () => {
   setUserVote((currVote) => {
    if (currVote === 1) {
        setVoteMessage("You can only upvote once!")
        return 1
    } else if (currVote === -1) {
        setVoteMessage("Your vote has been reset to neutral, click again to upvote")
    } else {
        setVoteMessage("Thanks for giving your feedback!")
    }

    changeArticleVote(articleId, 1)
    .catch(() => {
        setVoteMessage("Oops, your vote hasn't worked, try again")
        return currVote
    })

    return ++currVote;
   })
}

const downVote = () => {
    setUserVote((currVote) => {
     if (currVote === -1) {
         setVoteMessage("You can only downvote once!")
         return -1
     } else if (currVote === 1) {
         setVoteMessage("Your vote has been reset to neutral, click again to downvote")
     } else {
         setVoteMessage("Thanks for giving your feedback!")
     }

     changeArticleVote(articleId, -1)
     .catch(() => {
        setVoteMessage("Oops, your vote hasn't worked, try again")
        return currVote
    })

     return --currVote;
    })
 }






if (error) {
    return <p className="warning-text">{errMsg}</p>
} else if (loading) {
    return <p>Please wait while page loads</p>
} 

return (
    <>
    <div className="article-full">
        <h2>{result.title}</h2>
        <p>Penned by {result.author}</p>
        <p>Topic of {result.topic}</p>
        <p>Published on {dateFormatter(result.created_at)}</p>
        <p className="article-body">{result.body}</p>
        <p>Current Votes: {result.votes + userVote} <span className="vote-arrows" onClick={upVote}>⬆️</span> <span className="vote-arrows" onClick={downVote}>⬇️</span> <span className="vote-message" >{voteMessage}</span></p>
        <img src={result.article_img_url} alt="article_image"/>

    </div>
    <CommentList articleId={articleId} />
    </>
)

}