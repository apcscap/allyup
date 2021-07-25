import React, {useState} from 'react';
import logo from '../../imgs/logo.png'
import charityBanner from '../../imgs/charityimg.jpeg'
import './LandingPage.css';
import ShelterPortal from './ShelterPortal/ShelterPortal';
import DonorPortal from './DonorPortal/DonorPortal';

const Landing = ({isShelter, setIsShelter}) => {

    return (
        <div className="landing-container">
            <div className="title box">
                <img id="logo" src={logo} alt="AllyUp logo"></img>
                <h1 id="title-text">AllyUp</h1>
            </div>
            <div class="curve"></div>
            <div class="banner-container" style={{backgroundImage: `url(${charityBanner})`}}>
                <div class="lorem"> 
                    <h1>Never Stop Giving!</h1>
                    <h3>Bring back the intimate feeling of generosity.</h3>
                </div>
            </div>

            

            <div id="hero-container">   
                <ShelterPortal 
                    isShelter={isShelter} 
                    setIsShelter={setIsShelter}
                />     
                <DonorPortal
                    isShelter={isShelter} 
                    setIsShelter={setIsShelter}                 
                />                
            </div>
        </div>
    )
}

export default Landing
