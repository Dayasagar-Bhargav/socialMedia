import React from 'react'
import "./online.css"

function Online({user}) {
  return (
    <li className="rightbarfriend">
            <div className="rightbarProfileImgCOntainer">
              <img src={user.profilePicture} alt="" className='rightbarProfileImage'/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}

export default Online