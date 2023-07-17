import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className="links">
            <Link to="/home">Home</Link>
            </div>
        </nav>
    )
}