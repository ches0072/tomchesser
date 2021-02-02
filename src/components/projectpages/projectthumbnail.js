import React from 'react'
import PROJECTIMAGE from '../images/YouTubeTrender.png'

function projectthumbnail() {
    return (
        <div>
            <h2 style = {{fontSize: "20px", marginTop: "20px"}}>YouTube Trender</h2>
            <img className = "project-carousel-pages" src = {PROJECTIMAGE}/>

        </div>
    )
}

export default projectthumbnail;
