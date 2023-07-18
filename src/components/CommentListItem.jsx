import { dateFormatter } from "../utils"

export const CommentListItem = (props) => {
    const {comment} = props
    const {body, votes, author, created_at} = comment

    return (
        <li>
            <h4>Penned by {author} on {dateFormatter(created_at)}</h4>
            <p>{body}</p>
            <p>Current votes: {votes}</p>
        </li>
    )

}