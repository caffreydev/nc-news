import { Link } from "react-router-dom"

export const Navbar = () => {

    if (window.innerWidth < 700) {
        return (
            <nav>
                <img src="./nc-news-logo.png"/>
                <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/topics">Topics</Link>
                </div>
            </nav>
        )
    }



    return (
        <nav>
            <img src="./nc-news-logo.png"/>
            <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
            <Link to ="/login">Login</Link>
            </div>
        </nav>
    )
}