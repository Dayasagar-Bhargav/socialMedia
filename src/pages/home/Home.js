import React from 'react'
import Feed from '../../componants/feed/Feed'
import RightSideBar from '../../componants/rightsidebar/RightSideBar'
import Sidebar from '../../componants/sidebar/Sidebar'
import Topbar from '../../componants/topbar/Topbar'
import "./home.css"

function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <RightSideBar/>
    </div>
    </>
  )
}

export default Home