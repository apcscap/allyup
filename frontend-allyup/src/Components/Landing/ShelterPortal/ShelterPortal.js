import './ShelterPortal.css'
import { Link } from "react-router-dom";
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import shelter from '../../../imgs/shelter.png'

const ShelterPortal = ({isShelter, setIsShelter}) => {
    return (
        <div className="portal">
            <div className="portal-container">
                <span id="heading">Continue As A Shelter</span>
                <Link to="/login"><button className="arrw-icon" onClick={() => setIsShelter(true)}><FaArrowAltCircleRight/></button></Link>
            </div>
            <div className="positive">
                Continue as Shelter. Create posts on scholarships, fellowships, and grants for the people and causes you care most about.
            </div>
            <div className="center">
                <img src={shelter} alt="Image of Shelter" id="shelter-img"></img>
            </div>
        </div>
    )
}

export default ShelterPortal
