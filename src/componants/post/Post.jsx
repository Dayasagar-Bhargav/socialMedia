import {useState} from 'react'
import "./post.css"
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import {users} from "../../dummyData";

function Post({post}) {
    const[like,setLike] = useState(post.like)
    const[isliked,setisLiked] = useState(false)

    function likeounter(){
        setLike(isliked? like - 1 : like+1)
        setisLiked(!isliked)
        const icon = document.querySelector('.PostBottomLike')
        icon.classList.toggle('active')

    }

    const userName = users.filter((u)=>{
        return u.id === post.userId
    })[0]

  return (
    <>
    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={userName.profilePicture} alt="error"  className='postProfileImage'/>
                <span className="postUserName">{userName.username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
            <BsThreeDotsVertical/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc} </span>
            <img src={post.photo} alt="" className='postImg'/>
        </div>
        <div className="postbottom">
            <div className="postBottomLeft">
                <img className='Likeicon'  src="/assets/likee.png" alt="" />
                <img className='Likeicon'  src="/assets/heart.png" alt="" />
                <span className='postLikeCounter'>{like} peoples like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postBottomRightText">{post.comment} comments</span>
                <span className="postBottomRightText">{post.share} Shares</span>
            </div>
            
        </div>
        <hr  className='sharehr'/>

        <div className="PostBottomLikeSection">
            <div className="PostBottomLike" onClick={()=>{likeounter()}}>
                <BiLike className='postBottomLikeIcon'/>
                <span className="postBottomLikeText">Like</span>
            </div>
            <div className="PostBottomLike">
                <FaRegCommentAlt className='postBottomLikeIcon'/>
                <span className="postBottomLikeText">Comment</span>
            </div>
            <div className="PostBottomLike">
                <RiShareForwardLine className='postBottomLikeIcon'/>
                <span className="postBottomLikeText">Share</span>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Post