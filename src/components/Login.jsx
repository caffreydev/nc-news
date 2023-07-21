import { useState, useEffect } from "react"
import { getUsers } from "../utils"
import { DropDown } from "./DropDown"
import { useNavigate } from "react-router-dom"


export const Login = ({setUser}) => {
    //state variables
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [selectedUser, setSelectedUser] = useState("selectUser")

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setError(false)

        getUsers()
        .then((users) => {
            const userOptions = users.map(user => [user.username, user.username]) 
            userOptions.unshift(["Select user", "selectUser"])
            setUsers(userOptions)
            setLoading(false)
        })
        .catch((e) => {
            setLoading(false)
            setError(true)
        })
    }, [])


//form handling functions
const handleChange = (e) => {
        setSelectedUser(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()

    if (selectedUser === "selectUser") {
        return
    } else {
        setUser(selectedUser)
        navigate("/home")
    }

}


if (error) {
    return <p className="warning-text">Oops, connection error, please try again</p>
} else if (loading) {
    return <p className="loading-text">Please wait while page loads</p>
}



    return (
        <>
      
        <form className="login-form" onSubmit={handleSubmit}>
            <label>
            Select a user from the list:<br/>
            <select value={selectedUser} onChange={handleChange}>
            <DropDown optionsArray={users} />
            </select>
            </label>
            <input type="submit" value="Login"/>
        </form>
        </>
    )


}