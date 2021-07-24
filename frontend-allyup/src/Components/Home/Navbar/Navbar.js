import React from 'react'
import './Navbar.css'
import logo from '../../imgs/logo.png'
import { BsSearch } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} id="navbar-logo" />
            </div>

            <div className="navbar-title">
                AllyUp
            </div>

            <div className="navbar-search">
                <input className="navbar-searchInput" type="text" placeholder="Search"/>
                <div className="navbar-searchIcon"><BsSearch id="navbar-searchIcon"/></div>
            </div>

            <div className="navbar-nav">
                <div className="navbar-etc">
                    <span className="navbar-etcline1">Your</span>
                    <span className="navbar-etcline2">Profile</span>
                </div>                
                <div className="navbar-etc">
                    <span className="navbar-etcline1">Donations</span>
                    <span className="navbar-etcline2">& Records</span>
                </div>
                <div className="navbar-etc">
                    <span className="navbar-etcline1">Our</span>
                    <span className="navbar-etcline2">Mission</span>
                </div>
                <div className="navbar-homeIcon">
                    <AiFillHome id="navbar-homeIcon"/>
                </div>
            </div>
        </div>
    )
}
