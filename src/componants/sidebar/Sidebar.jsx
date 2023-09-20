import React from 'react'
import "./sidebar.css"
import { MdRssFeed } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { MdGroups } from 'react-icons/md';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { BiCalendarEvent } from 'react-icons/bi';
import { MdOndemandVideo } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { TbGridDots } from 'react-icons/tb';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { RiLinksFill } from 'react-icons/ri';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HiHome className='sidebarIcon'/>
            <span className="sidebarListItemText">Home </span>
          </li>
          <li className="sidebarListItem">
            <MdRssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed </span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className='sidebarIcon'/>
            <span className="sidebarListItemText">Friends </span>
          </li>
          <li className="sidebarListItem">
            <BsChatLeftTextFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats </span>
          </li>
          <li className="sidebarListItem">
            <BiCalendarEvent className='sidebarIcon'/>
            <span className="sidebarListItemText">Events </span>
          </li>
          <li className="sidebarListItem">
            <MdOndemandVideo  className='sidebarIcon'/>
            <span className="sidebarListItemText">Watch </span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkStarFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks </span>
          </li>
          <li className="sidebarListItem">
            <IoSettingsSharp  className='sidebarIcon'/>
            <span className="sidebarListItemText">Setting </span>
          </li>
        </ul>
        <div className='sidebarBtn'>
        <TbGridDots  className='sidebarIcon'/>
        <span>See More</span>
        </div>
        <hr className='sidebarhr'/>
        {/* ---------------------------------------------------------------------------------------- */}
        <ul className="sidebarFriendList">
          <li className="sidebarfriend">
            <img src="/assets/persons/1.jpg" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">Mooohit Chauhaaan</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/persons/2.jpg" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">Ravi Prakash</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/persons/3.jpg" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">ANIKET MAHAJAN</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/persons/4.jpg" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">Ranveer</span>
          </li>
          <li className="sidebarfriend">
            <MdPersonAddAlt1  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">See all Frineds</span>
          </li>
        </ul>
        <hr className='sidebarhr'/>

{/* --------------------------------------------------------------------------------------------------------- */}

        <ul className="sidebarFriendList">
          <li className="sidebarfriend">
            <img src="/assets/game/candy.png" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">Candy Crush</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/game/angry.png" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">Angry Birds</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/game/soda.png" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">Candy Crush Soda</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/game/download.jpg" alt=""  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">8 Ball Pool</span>
          </li>
          <li className="sidebarfriend">
            <RiLinksFill  className='sidebarfriendImage'/>
            <span className="sidebarfriendName">See all ShorCuts</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar