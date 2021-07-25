import React, {useState, useEffect} from 'react'
import './Post.css'
import axios from 'axios'

export default function Post(props) {

    const [userData, setUserData] = useState({})

    useEffect(() => {

        axios.get('http://localhost:4000/api/profile/' + props.uid)
          .then((response) => {  
            const res = response.data                                       
            setUserData(res)            
          },                    
          (error) => {
            console.log(error);
        });


    }, [])

    function handleDonate() {
        
        const postData = {
            postID: props.postID
        }
        console.log(postData)
        axios.post('http://localhost:4000/api/donate/post/', postData)
          .then((response) => {  
            const res = response.data                                       
            setUserData(res)            
          },                    
          (error) => {
            console.log(error);
        });
    }

    return (
        <div className="post-container">
            <div className="post-image">
                <img src={userData.imageURL} className="post-image"/>
            </div>

            <div className="post-content">
                <div className="post-sheltername">
                    {props.name}
                </div>

                <div className="post-info">
                    {userData.address} | {userData.email} | {userData.shelterType}
                </div>

                <a href={props.productLink} target="_blank" className="post-info">
                    Product Link Here!
                </a>

                <div className="post-desc">
                    {props.desc}
                </div>

                <button className="post-button" onClick={handleDonate}>
                    Donate
                </button>
            </div>
        </div>
    )
}
