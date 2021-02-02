import React from 'react'
import image from './images/ProfilePic.JPG'
import Socials from './socials'




function introduction() {
    return (
        <div className = "wrapper">
            <div className = "intro">
                <h1 className = "greeting">Hi, I'm Tom Chesser</h1>
                <Socials />
            </div>
            <img className = "profile" src = {image} alt = ""/>
        </div>    
        
    )
}

export default introduction;
