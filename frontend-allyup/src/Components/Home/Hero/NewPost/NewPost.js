import React, {useState, useEffect} from 'react'
import './NewPost.css'
import axios from 'axios'

const NewPost = ({userData}) => {

    useEffect(() => {
        console.log(userData)
    }, [])

    const imgUrl = userData.imageURL
    const name = userData.name
    const email = userData.email
    const shelterType = userData.shelterType
    const address = userData.address
    const isRequest = userData.isShelter

    const [description, setDescription] = useState('')
    const [productLink, setproductLink] = useState('')

    const posting = { 
        title: name, 
        description: description,  
        isRequest: isRequest,
        productLink: productLink, 
        category: shelterType,
        quantity: 0
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:4000/api/post/create', posting)
        .then((response) => {  
            console.log(response)
            setDescription('')
            setproductLink('')
        },                    
        (error) => {
          console.log(error);
        })
    }

    return (
        <div className="newpost-container">
            <div id="display-heading">
                <img 
                    src={imgUrl}
                    alt="Profile Pic"
                    id="profile-pic"
                    >
                </img>

                <div>
                    <span id="display-name">
                        Make a post under "{name}"!   
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

            <form id="display-form" onSubmit={handleSubmit}>
                <textarea 
                    id="display-description"
                    type="text-area" 
                    placeholder="Write your donation request here..."
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    required
                    >
                </textarea>

                <textarea 
                    id="display-productLink"
                    type="text-area" 
                    placeholder="Product Link..."
                    onChange={e => setproductLink(e.target.value)}
                    value={productLink}
                    required
                    >
                </textarea>

                <button 
                    type="submit"                    
                    id="display-submit"
                    >
                    POST    
                </button>
            </form>
        </div>
    )
}

export default NewPost
