import { Link } from "react-router-dom"
import "./register.css"

export default function register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your Password"/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
    )
}
