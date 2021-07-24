import React from 'react'
import './HomePage.css'
import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import Hero from './Hero/Hero'

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />

            <div className="home-content">
                <SideBar />
                <Hero />
            </div>
        </div>
    )
}
