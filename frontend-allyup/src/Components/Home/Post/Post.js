import React from 'react'
import './Post.css'

export default function Post(props) {
    return (
        <div className="post-container">
            <div className="post-image">
                <img src={props.imgUrl} className="post-image"/>
            </div>

            <div className="post-content">
                <div className="post-sheltername">
                    {props.name}
                </div>

                <div className="post-info">
                    {props.address} | {props.email} | {props.shelterType}
                </div>

                <div className="post-desc">
                    {props.desc}
                </div>

                <button className="post-button">
                    Save | Donate | Recieve
                </button>
            </div>
        </div>
    )
}
