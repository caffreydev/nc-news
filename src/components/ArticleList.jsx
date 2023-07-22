import { ArticleListItem, SearchForm } from "./"
import { getArticles } from "../utils"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export const ArticleList = () => {
    //state variables
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
  
   
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
   
        setLoading(true)
        setError(false)

const order = searchParams.get("order") || "desc"
const sort_by = searchParams.get("sort_by") || "created_at"
const topic = "all"


        getArticles(topic, order, sort_by)
        .then(articles => {     
            setLoading(false)
            setResults(articles)
        })
        .catch((e) => {
            setLoading(false)
            setError(true)
        })
    }, [searchParams])

    if (error) {
        return <p className="warning-text">Oops, something went wrong! Please try again</p>
    } else if (loading) {
        return <p className="loading-text">Wait while the page loads</p>
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