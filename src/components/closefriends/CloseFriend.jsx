import  './closefriend.css'

export default function CloseFriend({user}) {
  return (
    <li className="sidebarfriend">
    <img className='sidebarfriendimg' src={user.profilePicture} alt="" />
  <span className='sidebarfriendname'>{user.username}</span>
    </li>
  )
}
