import React from 'react'
import Carousel from 'react-elastic-carousel'
import Testthumbnail from './projectpages/projectthumbnail'
import Testthumbnail2 from './projectpages/testproject2'

export default function projects() {
    return (
        <div className="heading-div">
            <a className = "heading-title" name = "projects">Projects</a>
                    <button className = "project-type">Personal</button>
                    <button className = "project-type">Group</button>
                <div style = {{
                    backgroundColor: "darkgray",
                    padding: "20px"
                }}>
                    <Carousel className = "project-carousel" itemsToShow={1}>
                    <item><Testthumbnail /></item>
                    <item><Testthumbnail2 /></item>

                    </Carousel>
                </div>
            <div className= "heading-divider"></div>
        </div>
    )
}
