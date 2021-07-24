import React, {useState, useEffect} from 'react'
import './Hero.css'
import NewPost from './NewPost/NewPost'
import axios from 'axios'

export default function Hero() {

    const [userData, setUserData] = useState({})

    useEffect(() => {        
        axios.get('http://localhost:4000/api/user')
          .then((response) => {  
            const res = response.data                                       
            setUserData(res)      
            console.log(res)
          },                    
          (error) => {
            console.log(error);
          })
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-actionbar">
                <NewPost userData={userData}/>
            </div>

            <div className="hero-actionbar">
                Temp
            </div>

            <div className="hero-actionbar">
                Temp
            </div>

            <div className="hero-actionbar">
                Temp
            </div>

            <div className="hero-actionbar">
                Temp
            </div>
            <div className="hero-actionbar">
                Temp
            </div>
            <div className="hero-actionbar">
                Temp
            </div>
            <div className="hero-actionbar">
                Temp
            </div>
            <div className="hero-actionbar">
                Temp
            </div>
        </div>
    )
}
