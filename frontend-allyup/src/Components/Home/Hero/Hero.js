import React, {useEffect} from 'react'
import './Hero.css'
import NewPost from './NewPost/NewPost'

import Post from '../Post/Post'

export default function Hero({posts, isShelter, userData}) {

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

