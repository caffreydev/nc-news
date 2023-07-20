import { ArticleListItem } from "./"
import { getArticles } from "../utils"
import { useState, useEffect } from "react"


import { useParams } from "react-router-dom"

export const Topic = () => {
    //state variables
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

const {topicSlug} = useParams()

useEffect(() => {
    setLoading(true)
    setError(false)
    getArticles(topicSlug)
    .then(articles => {     
        setLoading(false)
        setResults(articles)
    })
    .catch((e) => {
        if (e.response.status === 404) {
            setErrorMessage(`There is no topic called ${topicSlug}`)
        } else {
            setErrorMessage("Oops, something went wrong! Please try again")
        }
        setLoading(false)
        setError(true)
    })
}, [topicSlug])

if (error) {
    return <p className="warning-text">{errorMessage}</p>
} else if (loading) {
    return <p className="loading-text">Wait while the page loads</p>
} else {
    return (
        <>
        <header>
            <h1>Article Contents</h1>
        </header>
        <main>
        <ul className="article-list">
        {results.map(article => {
            return <ArticleListItem key={article.article_id} article={article} />
        })}
        </ul>
        </main>
        </>
        )
}
    
} 