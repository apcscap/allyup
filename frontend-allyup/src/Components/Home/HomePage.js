import React from 'react'
import './HomePage.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />
        </div>
    )
}
