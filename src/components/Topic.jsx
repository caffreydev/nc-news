import { ArticleListItem } from "./"
import { getArticles } from "../utils"
import { useState, useEffect } from "react"


import { useParams } from "react-router-dom"

export const Topic = () => {
    //state variables
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

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
        setLoading(false)
        setError(true)
    })
}, [topicSlug])

if (error) {
    return <h3>Oops, something went wrong! Please try again</h3>
} else if (loading) {
    return <h3>Wait while the page loads</h3>
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