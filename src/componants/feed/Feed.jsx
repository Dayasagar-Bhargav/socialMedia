import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import {posts} from "../../dummyData"

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((post)=> {
            return <Post key={post.id} post={post}/>
        })}
        
      </div>
    </div>
  )
}

export default Feed