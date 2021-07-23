import React from 'react'
import './DonorPortal.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import donation from '../../imgs/donation.png'

const DonorPortal = () => {
    return (
        <div className="portal">
            <div className="portal-container">
                <span id="heading">Continue As A Donor</span>
                <button className="arrw-icon"><FaArrowAltCircleRight/></button>
            </div>
            <div className="positive">
                Continue as Continue as a Donor Create scholarships, fellowships, and grants for the people and causes you care most about.
            </div>
            <img src={donation} alt="Image of Donation" id="donation-img"></img>
        </div>

    )
}

export default DonorPortal
