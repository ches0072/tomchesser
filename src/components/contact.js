import React from 'react'
import Socials from './socials'

function contact() {
    const time = () =>{
        var currentdate = new Date();
        var currenthour = currentdate.getHours();
        var currentmin = currentdate.getMinutes();
        return currenthour + ":" + currentmin;
    }

    return (
        <div className = "heading-div">
            <a className = "heading-title" name="contact" alt = "">Contact</a>
            <Socials />
        <h3>My current local time is {time()}</h3>
            <div className= "heading-divider"></div>
        </div>
    )
}

export default contact
