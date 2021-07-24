import React from 'react'
import './SideBar.css'
import { GiGreenhouse, GiPaperBoat, GiTripleNeedle } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { FaDog } from 'react-icons/fa'
import { CgGirl } from 'react-icons/cg'

export default function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <GiGreenhouse className="sidebar-titleicon"/>
                Donation Center 
            </div>

            <div className="sidebar-options">
                <div className="sidebar-option">
                    Browse
                </div>
                <div className="sidebar-option">
                    Requests
                </div>
                <div className="sidebar-option">
                    Donations
                </div>
                <div className="sidebar-option">
                    Saved
                </div>
            </div>

            <div className="sidebar-hr" />

            <div className="sidebar-subtitle">
                Categories
            </div>
            <div className="sidebar-categories">
                <div className="sidebar-category">
                    <GiTripleNeedle className="sidebar-titleicon" />
                    COVID-19 Related
                </div>
                <div className="sidebar-category">
                    <AiFillHome className="sidebar-titleicon"/>
                    Homeless Shelters
                </div>
                <div className="sidebar-category">
                    <GiOpenedFoodCan className="sidebar-titleicon"/>
                    Food Pantries
                </div>
                <div className="sidebar-category">
                    <FaDog className="sidebar-titleicon"/>
                    Animal Shelters
                </div>
                <div className="sidebar-category">
                    <CgGirl className="sidebar-titleicon"/>
                    Women Shelters
                </div>
                <div className="sidebar-category">
                    <GiPaperBoat className="sidebar-titleicon"/>
                    Refugee Shelters
                </div>
            </div>
        </div>
    )
}
