import './Profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/feed'

export default function Profile() {
  return (
    <div>
    <Topbar/>
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img className='profileCoverImg' src="public/assets/person/london2.jpg" alt="" />        
        <img className='profileUserImg' src='public/assets/person/nu.jpg'/>
        </div>
        <div className="profileInfo">
          <h4 className='profileInfoName'>Enemali Simon</h4>
          <span className='profileInfoDes '>Hello my Friends</span>
        </div>
      </div>
       <div className="profileRightBottom">
        <Feed />
        <Rightbar/>
       </div>
    </div>
    </div>
  </div>
  )
}
