import React from 'react'
import { Link } from "react-router-dom";
import './DonorPortal.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import donation from '../../../imgs/donation.jpeg'

const DonorPortal = ({isShelter, setIsShelter}) => {
    return (
        <div className="portal">
            <div className="portal-container">
                <span id="heading">Continue As A Donor</span>
                <Link to="/login"><button className="arrw-icon" onClick={() => setIsShelter(false)}><FaArrowAltCircleRight/></button></Link>
            </div>
            <div className="positive">
                Continue as a Donor. Contribute towards scholarships, fellowships, and grants for the people and causes you care most about.
            </div>
            <div className="center">
                <img src={donation} alt="Image of Donation" id="donation-img"></img>
            </div>
        </div>

    )
}

export default DonorPortal
