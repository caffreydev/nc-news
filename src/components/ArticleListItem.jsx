import { Link } from "react-router-dom"
import { dateFormatter } from "../utils"

export const ArticleListItem = ({article}) => {
    const {
        article_id, title, topic, author, 
        created_at, article_img_url
    } = article

return (
    <li>
        <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
        <p>Penned by {author}</p>
        <p>Topic of {topic}</p>
        <p>{dateFormatter(created_at)}</p>
        <img src={article_img_url} alt="article_image"/>
    </Link>
    </li>
    
)


}