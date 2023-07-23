import { ArticleListItem, SearchForm } from "./"
import { getArticles } from "../utils"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export const ArticleList = () => {
    //state variables
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [authorOptions, setAuthorOptions] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();



    useEffect(() => {
   
        setLoading(true)
        setError(false)

const order = searchParams.get("order") || "desc"
const sort_by = searchParams.get("sort_by") || "created_at"
const author = searchParams.get("author") || "all"
const topic = searchParams.get("topic") || "all"


        getArticles(topic, order, sort_by, author)
        .then(articles => {   
            
            if (authorOptions.length === 0) {
            let authors = []  
            articles.forEach((article, index) => {
               authors.push(article.author)
            })
            authors =
            authors
            .filter((author, index) => index === authors.indexOf(author))
            .map(author => [author, author])
            authors.unshift(["All", "all"])
                setAuthorOptions(authors)
              
            } //populates options on initial page load only, to set dropdown options
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
    } else if (results.length === 0) {
        return (
            <main>
<SearchForm authorOptions={authorOptions}/>
        <h1>No articles found, try changing your search criteria!</h1>
            </main>
        )
    } 
    else {
        return (
            <>
            <header>
                <h1>Article Contents</h1>
            </header>
            <SearchForm authorOptions={authorOptions}/>
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