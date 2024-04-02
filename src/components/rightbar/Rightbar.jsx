import './Rightbar.css'
import { Users } from '../../dummyData';
import Online from '../online/Online';


export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/person/samuel.jpg" alt="" />
            <span className='birthdayText'>
              <b>Benjamin  Samuel</b> and <b>3 other friends </b> have birthday today</span>
        </div>
          <img className='rightbarAd' src='/assets/person/phonead.jpg'/>
          <h4 className='rightbarTitle'>Online Friends</h4>
          <ul className="rightFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
       </>
    );
  };

  const ProfileRightbar = () => {
    return (
       <>
          <h4 className='rightBarTitle'>User Information</h4>
          <div className="rightBarInfo">
            <div className="rightBarInfoItem">
              <span className="rightBarInfoKey">City:</span>
               <span className="rightBarValue">Abuja</span>
            </div>
            <div className="rightBarInfoItem">
              <span className="rightBarInfoKey">From:</span>
               <span className="rightBarValue">Nigeria</span>
            </div>
            <div className="rightBarInfoItem">
              <span className="rightBarInfoKey">Relationship:</span>
               <span className="rightBarValue">Single</span>
            </div>
          </div>
          <h4 className="rightBarTitke">User Friends</h4>
          <div className="rightBarFollowings">
            <div className="rightBarFollowing">
              <img src="/assets/person/samuel.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">Benjamin Samuel</span>
            </div>
            <div className="rightBarFollowing">
              <img src="/assets/person/samuel.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">Benjamin Samuel</span>
            </div>
            <div className="rightBarFollowing">
              <img src="/assets/person/samuel.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">Benjamin Samuel</span>
            </div>
            <div className="rightBarFollowing">
              <img src="/assets/person/samuel.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">Benjamin Samuel</span>
            </div>
            <div className="rightBarFollowing">
              <img src="/assets/person/samuel.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">Benjamin Samuel</span>
            </div>
            <div className="rightBarFollowing">
              <img src="/assets/person/samuel.jpg" alt="" className="rightBarFollowingImg" />
              <span className="rightBarFollowingName">Benjamin Samuel</span>
            </div>
          </div>
       </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
