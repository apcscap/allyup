import React, {useState, useEffect} from 'react'
import './HomePage.css'
import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import Hero from './Hero/Hero'
import axios from 'axios'

export default function Home() {

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
        <div className="home-container">
            <Navbar />

            <div className="home-content">
                <SideBar 
                    posts={posts}
                    setPosts={setPosts}
                />
                <Hero 
                    posts={posts}
                    isShelter={isShelter}
                    userData={userData}    
                />
            </div>
        </div>
    )
}
