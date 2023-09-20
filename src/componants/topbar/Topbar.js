import React from 'react'
import "./topbar.css"
import { ImSearch } from 'react-icons/im';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';

function Topbar() {
  return (
    <>
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Sangathan</span>
        </div>
        <div className="topbarCenter">
            <div className="serachBar">
            <ImSearch  className='searchIcon'/>
            <input type="text" className="searchInput" placeholder='search.....'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                    <span className="toplink">Homepage</span>
                    <span className="toplink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbariconitem">
                <BsFillPersonFill />
                <span className="topbariconBadge">1</span>
                </div>
            
                <div className="topbariconitem">
                <BsFillChatLeftDotsFill />
                <span className="topbariconBadge">5</span>
                </div>
           
                <div className="topbariconitem">
                <IoIosNotifications />
                <span className="topbariconBadge">12</span>
                </div>
            </div>
            <img src="/assets/persons/12.jpg" alt="" className='topbarImg' />
        </div>
    </div>
    </>
  )
}

export default Topbar