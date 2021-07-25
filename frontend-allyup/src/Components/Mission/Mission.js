import React, {useEffect} from 'react'
import './Mission.css'

export default function Mission({posts, isShelter, userData}) {

    return (
        <div className="mission-container">
            <div className="mission-title">
                Welcome to AllyUp!
            </div>

            <div className="mission-content">
            When one donates to an organization or charity they don't see where their donation goes towards. With our app, AllyUp, we're seeking to bring transparency and the intimate feeling of generosity back to donating. Users have the ability to choose what to donate as well as provide for the specific needs of their favorite organizations. The immediate impact people make when they click the donation button will put users into a positive feedback loop. Never stop giving!
            </div>
        </div>
    )
}