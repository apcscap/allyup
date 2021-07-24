import React, {useState} from 'react';
import logo from '../../imgs/logo.png'
import './LandingPage.css';
import ShelterPortal from './ShelterPortal/ShelterPortal';
import DonorPortal from './DonorPortal/DonorPortal';

const Landing = ({isShelter, setIsShelter}) => {

    return (
        <div className="landing-container">
            <div className="title">
                <img id="logo" src={logo} alt="AllyUp logo"></img>
                <h1 id="title-text">AllyUp</h1>
            </div>

            <div id="lorem"> 
                Nostrud anim anim elit incididunt commodo amet. Voluptate dolor eu qui ad ullamco do cupidatat aliqua nisi enim culpa reprehenderit mollit. Veniam ut cillum ea aliqua minim ut irure sint. Eiusmod adipisicing eu elit ex aliqua mollit adipisicing sit ipsum. Amet velit aliqua proident ea laboris deserunt do enim.
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
