import Feed from '../../componants/feed/Feed'
import RightSideBar from '../../componants/rightsidebar/RightSideBar'
import Sidebar from '../../componants/sidebar/Sidebar'
import Topbar from '../../componants/topbar/Topbar'
import React from './profile.css'

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="prfileCover">
              <img src="assets/post/8.jpg" alt="" className='profileCoverImage' />
              <img src="assets/persons/me.jpeg" alt="" className='profileUserImage' />
            </div>
            <div className="prfileInfo">
              <h4 className='profileInfoName'> Dayasagar Bhargav</h4>
              <span className="profileInfoDesc">Hello Dear Friends!</span>
            </div>
          </div>
          <div className="profileRightbottom">
            <Feed />
            <RightSideBar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile