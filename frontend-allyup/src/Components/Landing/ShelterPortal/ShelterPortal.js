import './ShelterPortal.css'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import shelter from '../../imgs/shelter.png'

const ShelterPortal = () => {
    return (
        <div className="portal">
            <div className="portal-container">
                <span id="heading">Continue As A Shelter</span>
                <button className="arrw-icon"><FaArrowAltCircleRight/></button>
            </div>
            <div className="positive">
                Continue as Continue as a Donor Create scholarships, fellowships, and grants for the people and causes you care most about.
            </div>
            <div className="center">
                <img src={shelter} alt="Image of Shelter" id="shelter-img"></img>
            </div>
        </div>
    )
}

export default ShelterPortal
