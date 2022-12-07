import React from 'react'
import "./home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="banner">
            </div>
            <div className="content">
                <h1>DATA-BASE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo autem temporibus in possimus impedit.
                    <br /> excepturi officiis molestias dolorum laudantium itaque adipisci et necessitatibus.
                </p>
                <div>
                    <button type="button"><span></span><Link to="/students" >STUDENTS</Link></button>
                    <button type="button"><span></span><Link to="/teachers" >TEACHERS</Link></button>
                </div>
            </div>
        </>
    )
}

export default Home