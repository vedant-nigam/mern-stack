import React from "react"
import { Link } from "react-router-dom"
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {
    return (
        <div className="homepage">
            <h1 className="container">Access DataBase </h1>
            {/* <div className="button" onClick={() => setLoginUser({})} >Logout</div> */}
            <button  className="btn"><Link to='/students'>Student</Link></button>
            <button className="btn"><Link to='/teachers'>Teacher</Link></button>
        </div>
    )
}

export default Homepage