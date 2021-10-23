import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your Password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerRegisterButton"><Link className="link" to="/register">Register</Link></button>
        </div>
    )
}
