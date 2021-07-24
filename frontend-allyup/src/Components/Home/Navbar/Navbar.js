import React from 'react'
import './Navbar.css'
import logo from '../../../imgs/logo.png'
import { BsSearch } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={logo} id="navbar-logo" />
            </Link>

            <Link to="/" className="navbar-title">
                AllyUp
            </Link>

            <div className="navbar-search">
                <input className="navbar-searchInput" type="text" placeholder="Search"/>
                <div className="navbar-searchIcon"><BsSearch id="navbar-searchIcon"/></div>
            </div>

            <div className="navbar-nav">
                <Link to="/" className="navbar-etc">
                    <span className="navbar-etcline1">Your</span>
                    <span className="navbar-etcline2">Profile</span>
                </Link>                
                <Link to="/" className="navbar-etc">
                    <span className="navbar-etcline1">Donations</span>
                    <span className="navbar-etcline2">& Records</span>
                </Link>
                <Link to="/" className="navbar-etc">
                    <span className="navbar-etcline1">Our</span>
                    <span className="navbar-etcline2">Mission</span>
                </Link>
                <Link to="/home" className="navbar-homeIcon">
                    <AiFillHome id="navbar-homeIcon"/>
                </Link>
            </div>
        </div>
    )
}
