import { useEffect, useState } from "react"
import { getArticle, dateFormatter } from "../utils"
import { useParams } from "react-router-dom"
import { CommentList } from "./"

export const Article = () => {

    //state for article
    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errMsg, setErrMsg] = useState("Something went wrong, please navigate back to the Articles list and try again")
    const [userVote, setUserVote] = useState(0)

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
        <img src={result.article_img_url} alt="article_image"/>

    </div>
    <CommentList articleId={articleId} />
    </>
)

}