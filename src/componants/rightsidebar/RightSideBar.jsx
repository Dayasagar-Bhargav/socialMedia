import React from 'react'
import "./rightsidebar.css"
import {BsFillGiftFill} from "react-icons/bs"
import {users} from "../../dummyData";
import Online from './online/Online';

function RightSideBar({profile}) {

  const HomeRightBar = () =>{
    return(
      <>
      <div className="birthdaycontainer">
          <BsFillGiftFill className='birthdayIcon'/>
          <span className="birthdayText">
            <b>Manoj Bajpayee</b> and <b> 2 others Friends</b> have Birthday today.
          </span>
        </div>
        <img src="/assets/add.jpg" alt="error"  className='rightbarAdd'/>
        <hr />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((u) => {
            return <Online key={u.id}  user={u}/>
          })}
        </ul>
        </>
    )
  }

  const ProfileRightBar = () =>{
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City : </span>
          <span className="rightbarInfoValue">Delhi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From : </span>
          <span className="rightbarInfoValue">Nangloi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship : </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightBarFollowings">
        <div className="rightBarFollowing">
          <img src="assets/persons/1.jpg" alt="" className='rightBarFollowingImage'/>
          <span className="rightBarFollowingName">Mooohit</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/persons/2.jpg" alt="" className='rightBarFollowingImage'/>
          <span className="rightBarFollowingName">Akhilesh yadav</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/persons/3.jpg" alt="" className='rightBarFollowingImage'/>
          <span className="rightBarFollowingName">Himanshu</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/persons/4.jpg" alt="" className='rightBarFollowingImage'/>
          <span className="rightBarFollowingName">Rahul Kumar</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/persons/7.jpg" alt="" className='rightBarFollowingImage'/>
          <span className="rightBarFollowingName">Saurav roy</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/persons/10.jpg" alt="" className='rightBarFollowingImage'/>
          <span className="rightBarFollowingName">Prashant</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightsidebar'>
      <div className="rightbarwrapper">
       { profile ?  <ProfileRightBar/>: <HomeRightBar/>}
      </div>
    </div>
  )
}

export default RightSideBar