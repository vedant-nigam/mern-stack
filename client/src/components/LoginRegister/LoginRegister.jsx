import React, {useState} from "react"
import { useRef } from 'react'
import "./loginregister.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginRegister = ({ setLoginUser }) => {
    const loginRef = useRef(null)
    const registerRef = useRef(null)
    const btnRef = useRef(null)
    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            // alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/home")
        })
    }
    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div ref={btnRef} id="btn"></div>
                    <button type="button" className="toggle" onClick={() => {
                        loginRef.current.style.left = "50px";
                        registerRef.current.style.left = "450px";
                        btnRef.current.style.left = "0px";
                    }}>Log-in</button>
                    <button type="button" className="toggle" onClick={() => {
                        loginRef.current.style.left = "-480px";
                        registerRef.current.style.left = "50px";
                        btnRef.current.style.left = "110px";
                    }}>Register</button>
                </div>
                <form ref={loginRef} id="login" action="" className="input">
                    <input type="text" className="input-f" placeholder="user-id" required />
                    <input type="password" className="input-f" placeholder="enter-password" required />
                    <input type="checkbox" className="check-box" /><span>remember-password </span>
                    <button type="submit" className="submit-btn" onClick={login} >Log-in</button>
                </form>
                <form ref={registerRef} id="register" action="" className="input">
                    <input type="text" className="input-f" placeholder="user-id" required />
                    <input type="email" className="input-f" placeholder="email-id" required />
                    <input type="text" className="input-f" placeholder="enter-password" required />
                    {/* <input type="checkbox" className="check-box" /> */}
                    {/* <span> i agree with the terms & conditions</span> */}
                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </div>
    )
}

export default LoginRegister