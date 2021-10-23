import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://www.whoa.in/download/landscape-natural-wallpapers-hd-images-wallpapers" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="XYZ"/>    
                    <label>Email</label>
                    <input type="email" placeholder="xyz@gmail.com"/>    
                    <label>Password</label>
                    <input type="password"/>    
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
