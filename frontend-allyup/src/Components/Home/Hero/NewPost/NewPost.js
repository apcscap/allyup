import React, {useState, useEffect} from 'react'
import './NewPost.css'

const NewPost = ({userData}) => {

    useEffect(() => {
        console.log(userData)
    }, [])

    const imgUrl = userData.imageURL
    const name = userData.name
    const email = userData.email
    const shelterType = userData.shelterType
    const address = userData.address

    return (
        <div>
            <div id="display-heading">
                <img 
                    src={imgUrl}
                    alt="Profile Pic"
                    id="profile-pic"
                    >
                </img>

                <div>
                    <span id="display-name">
                        {name}     
                    </span>

                    <div id="details-container">
                        <span id="display-addy">
                            {` ${address} |`}               
                        </span>

                        <span id="display-email">
                            {` ${email} |`}                  
                        </span>
                        
                        <span id="display-shelter-type">
                            {` ${shelterType}`}                   
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost
