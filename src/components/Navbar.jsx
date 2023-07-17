import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className="links">
            <Link to="/nc-news/home">Home</Link>
            </div>
        </nav>
    )
}