import React from 'react'
import "./share.css"
import { MdPermMedia } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';

function Share() {
  return (
    <>
    <div className="share">
        <div className="shareWrapper">
            <div className="shereTop">
                <img src="/assets/persons/12.jpg" alt="" className='shareProfileImg'/>
                <input type="text" className='shareInput'  placeholder="What's on your mind Dayasagar?"/>
            </div>
            <hr  className='sharehr'/>

            <div className="shereBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <FaVideo id='video'  className='shareIcon'/>
                        <span className="shareOptionText">Live Video</span>
                    </div>
                    <div className="shareOption">
                        <MdPermMedia  id='photo' className='shareIcon'/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <BsFillEmojiHeartEyesFill id='emoji' className='shareIcon'/>
                        <span className="shareOptionText">Feeling/activity</span>
                    </div>
                    <div className="shareOption">
                        <ImLocation2  id='location' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <button className="sharebtn">Share</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Share