import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="https://www.teahub.io/photos/full/277-2777540_nature-hd-wallpapers-4k-wallpaper-for-pc-download.jpg" alt="" className="writeImg" />
           <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true} />
                </div> 
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="tell your story..." 
                        type="text"
                        className="writeInput writeText">
                    </textarea>
                </div> 
                <button className="writeSubmit">Publish</button> 
            </form> 
        </div>
    )
}
