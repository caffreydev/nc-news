import { getTopics, titleCase } from "../utils"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


export const TopicsList = () => {
    
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        getTopics()
        .then(topics => {     
            setLoading(false)
            setResults(topics)
        })
        .catch((e) => {
            setLoading(false)
            setError(true)
        })
    }, [])
    
if (error) {
    return <p className="warning-text">Error getting topics, please try again</p>
} else if (loading) {
    return <p className="loading-text">Please wait while we get list of topics</p>
}
    
    return (
        <main>
<h1>All Topics</h1>
<h2>Click a topic to see a list of all articles of that type</h2>
<ul>
{results.map(el => {
    return (
       <Link to={`/topics/${el.slug}`}>
        <li className="topics-list-item" key={el.slug}>
        <h2>{titleCase(el.slug)}</h2>
        <p>{el.description}</p>
            
       </li>
        </Link>     
        )
    })}
    </ul>

        </main>
    )
}