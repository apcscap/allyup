import React, {useState, useEffect} from 'react'
import './RecordsPage.css'
import Navbar from '../Home/Navbar/Navbar'
import SideBar from '../Home/SideBar/SideBar'
import Records from './Records'
import axios from 'axios'

export default function RecordsPage() {

    const [userData, setUserData] = useState({})    
    const [posts, setPosts] = useState([])
    const [isShelter, setIsShelter] = useState(true);

    useEffect(() => {
        
        axios.get('http://localhost:4000/api/records')
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
        <div className="home-container">
            <Navbar />

            <div className="home-content">
                <SideBar 
                    posts={posts}
                    setPosts={setPosts}
                />
                
                <Records
                    posts={posts}
                    isShelter={isShelter}
                    userData={userData}    
                />

            </div>
        </div>
    )
}