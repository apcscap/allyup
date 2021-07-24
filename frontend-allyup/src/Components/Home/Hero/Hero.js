import React, {useState, useEffect} from 'react'
import './Hero.css'
import NewPost from './NewPost/NewPost'
import axios from 'axios'
import Post from '../Post/Post'

export default function Hero() {

    const [userData, setUserData] = useState({})
    const [posts, setPosts] = useState([]) 
    const [isShelter, setIsShelter] = useState(false);  

    useEffect(() => {        
        axios.get('http://localhost:4000/api/user')
          .then((response) => {  
            const res = response.data                                       
            setUserData(res)      
            setIsShelter(res.isShelter)
            console.log(res)
            console.log(isShelter)
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
        <div className="hero-container">

            {isShelter && <div className="hero-actionbar">
                <NewPost userData={userData}/>
            </div>}

            {posts.sort(function (a, b) {
                return b.date - a.date;
            }).map((post) => (
                <Post 
                   name={post.title}
                   category={post.category}
                   desc={post.description}
                   date={post.date}
                   isRequest={post.isRequest}
                   productLink={post.productLink}
                   uid={post.uid}
                />
            ))}

        </div>
    )
}

