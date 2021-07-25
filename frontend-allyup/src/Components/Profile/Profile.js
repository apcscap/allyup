import React, {useState, useEffect} from 'react'
import './Profile.css'
import axios from 'axios'

export default function Profile({posts, isShelter, userData}) {

    return (
        <div className="profile-container">
            <div className="profile-title">
                Welcome Back!
                <div className="profile-subtitle">@{userData.name}</div>
            </div>

            <div className="profile-content">
                <img src={userData.imageURL} className="profile-img"></img>
                <div className="profile-text">Username: {userData.name}</div>
                <div className="profile-text">Email: {userData.email}</div>
                {isShelter && <div className="profile-text">Address: {userData.address}</div>}
                {isShelter && <div className="profile-text">Shelter Type: {userData.shelterType}</div>}
                <button className="profile-button">Edit</button>
            </div>
        </div>
    )
}