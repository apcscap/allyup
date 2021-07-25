import React, {useEffect} from 'react'
import './Records.css'
import Post from '../Home/Post/Post'
export default function Records({posts, isShelter, userData}) {

    return (
        <div className="hero-container">

            {posts.sort(function (a, b) {
                return b.date - a.date;
            }).map((post) => (
                <Post 
                   name={post.title}
                   category={post.category}
                   desc={post.description}
                   date={post.date}
                   isRequest={post.isRequest}
                   postID={post.postID}
                   productLink={post.productLink}
                   uid={post.uid}
                   
                />
            ))}

        </div>
    )
}