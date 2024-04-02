import './Post.css'
import {MoreVert} from  '@mui/icons-material'
import {Users} from '../../dummyData';
import { useState } from 'react';
 
export default function Post({post}) {

  const [like, setLike] = useState(post.like)
  const [isliked, setIsLike] = useState(false)

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1)
    setIsLike(!isliked)
  }

    return (
    <div className="post">
      <div className='postWrapper'>
      <div className="postTop">
        <div className="postTopLeft">
          <img className='postProfileImg' src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" />
          <span className='postUsername'>
            {Users.filter((u)=>u.id === post.userId)[0].username}
          </span>
          <span className='postDate'>{post.date}</span>
        </div>
        <div className="postTopRight">
          <MoreVert className='' />
        </div>
      </div>
      <div className="postCenter">
        <div className="postText">{post.desc}</div>
        <img className='postImg' src={post.photo} alt="" />
      </div>
      <div className="postButton">
        <div className="postButtonLeft">
        <img className='heartIcon'onClick={likeHandler}src="/assets/icon/like.png" alt="" />
        <img className='likeIcon' onClick={likeHandler} src="/assets/icon/heart.png" alt="" />
        <span className='postLikedCounter'>{like} people like it</span>
        </div>
        <div className="postButtonLeft">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
    </div>
  )
}
