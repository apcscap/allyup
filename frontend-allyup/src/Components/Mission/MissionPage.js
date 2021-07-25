import React, {useState, useEffect} from 'react'
import './MissionPage.css'
import Navbar from '../Home/Navbar/Navbar'
import SideBar from '../Home/SideBar/SideBar'
import Mission from './Mission'
import axios from 'axios'

export default function MissionPage() {

    const [userData, setUserData] = useState({})    
    const [posts, setPosts] = useState([])
    const [isShelter, setIsShelter] = useState(true);

    useEffect(() => {        
        axios.get('http://localhost:4000/api/user')
          .then((response) => {  
            const res = response.data                                       
            setUserData(res)      
            setIsShelter(res.isShelter)
          },                    
          (error) => {
            console.log(error);
        });
        
        axios.get('http://localhost:4000/api/posts')
          .then((response) => {  
            const res = response.data                                       
            setPosts(res)
            console.log(res)
          },                    
          (error) => {
            console.log(error);
        });
      
      }, []);
      
    return (
        <div className="recordspage-container">
            <Navbar />

            <div className="recordspage-content">
                <SideBar 
                    posts={posts}
                    setPosts={setPosts}
                />
                
                <Mission
                    posts={posts}
                    isShelter={isShelter}
                    userData={userData}    
                />

            </div>
        </div>
    )
}