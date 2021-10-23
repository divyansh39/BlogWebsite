import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
    const user=true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topList-items"><Link className="link" to="/">HOME</Link></li>
                    <li className="topList-items"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topList-items"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topList-items"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topList-items">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ?(<img className="topImg"src="data:image/jpeg;base64,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" alt="profile pic" />)
                :(
                <ul className="topList">
                    <li className="topList-items">
                       <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topList-items">
                       <Link className="link" to="/register">REGISTER</Link>
                    </li>
                </ul>)
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
