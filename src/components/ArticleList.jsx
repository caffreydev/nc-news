import { ArticleListItem, SearchForm } from "./"
import { getArticles } from "../utils"
import { useState, useEffect } from "react"


export const ArticleList = () => {
    //state variables
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        getArticles()
        .then(articles => {     
            setLoading(false)
            setResults(articles)
        })
        .catch((e) => {
            setLoading(false)
            setError(true)
        })
    }, [])

    if (error) {
        return <h2>Oops, something went wrong! Please try again</h2>
    } else if (loading) {
        return <h3>Wait while the page loads</h3>
    } else {
        return (
            <>
            <header>
                <h1>Article Contents</h1>
            </header>
            <SearchForm />
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