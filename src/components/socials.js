import React from 'react'
import face from './images/facebook.png'
import linked from './images/linkedin.png'
import mail from './images/mail.png'

function socials() {
    return (
        <div className = "socials">
                <a href = "https://www.facebook.com/"><img className ="social_logo" src = {face} alt=""/></a>          
                <a href = "https://www.google.com/"><img className ="social_logo" src = {mail} alt=""/></a>
                <a href = "https://www.linkedin/"><img className ="social_logo" src = {linked} alt=""/></a>
        </div>
    )
}

export default socials;
