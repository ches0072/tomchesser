import React from 'react'
import IMAGE from './images/ProfilePic.JPG'

function about() {
    return (
        <div className="heading-div">
            <a className="heading-title" name="about" alt ="">About</a>
            <div style = {{display: "flex", alignItems: "center", margin: "100px", marginLeft: "150px"}}>
                <img src = {IMAGE} style = {{display: "flex", flexDirection: "column", maxHeight: "300px", maxWidth: "300px"}} />
                <div style = {{textAlign : "left", display: "block"}}>
                    <p style = {{textAlign: "left", margin: "10px"}}> Greetings! My name is Thomas Chesser, I am an IT student studying at Flinders University </p>
                    <ul>
                    <li>Apples</li>
                    <li>More Apples</li>
                    <li>Mooore Apples</li>
                    <li>Moooooooore Apples</li>
                    </ul>
                </div>
            </div>
            <div className= "heading-divider"></div>
        </div>
    )
}

export default about;
