import { Link } from "react-router-dom"

export const Home = ({user}) => {

    const loginPromptText = window.innerWidth < 700 ? "come back to this page to login" : "hit login on the navigation bar above"



    if (user === "Guest") {
        return (
            <main>
                <h1>Welcome to the site!</h1>
                <p>You can continue as a guest,
                    viewing all the articles and comments.  
                    But for the best experience, make sure to login.<br/>
                    That way you can comment, and leave your feedback on articles!
                </p>
                <Link to="/login"><button className="home">Login</button></Link>
                <br />
                <p>I didn't convince you to login? If you change your mind later just {loginPromptText}</p>
                <Link to="/articles"><button className="home-small">Continue as Guest to View All Articles</button></Link>
            </main>
        )
    } 



    return (
        <main>
            <h1>Welcome {user}</h1>
            <p>Great that you're logged in!<br/>
                This way you can comment, and leave your feedback on articles!
            </p>
            <Link to="/articles"><button className="home">Head straight for the articles</button></Link>

            <br />
            <p>Not you? Head here to login as someone else?</p>
            <Link to="/login"><button className="home">Login</button></Link>

        </main>
    )
}