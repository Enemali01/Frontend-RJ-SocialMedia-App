import './Sidebar.css'
import { Bookmark, ChairAltOutlined, ChatBubbleOutlineSharp, Event, Group, Place, PlayCircleFilledOutlined, QuestionMarkSharp, QuestionMarkTwoTone, RssFeed, School, WorkOutline} from '@mui/icons-material'
import { Users } from '../../dummyData';
import CloseFriend from '../closefriends/CloseFriend';


export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarWrapper">
      <ul className="sidebarlist">
        <li className="sidebaritem">
          <RssFeed className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Feed</span>
        </li>
        <li className="sidebaritem">
          <ChatBubbleOutlineSharp className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Chats</span>
        </li>
        <li className="sidebaritem">
          <PlayCircleFilledOutlined className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Video</span>
        </li>
        <li className="sidebaritem">
          <Group className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Group</span>
        </li>
        <li className="sidebaritem">
          <Bookmark className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Bookmarks</span>
        </li>
        <li className="sidebaritem">
          <QuestionMarkSharp className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Questions</span>
        </li>
        <li className="sidebaritem">
          <WorkOutline className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Job</span>
        </li>
        <li className="sidebaritem">
          <Event className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Events</span>
        </li>
        <li className="sidebaritem">
          <School className='sidebaricon'/>
           <span className='sidebaritemlisttext'>Courses</span>
        </li>
      </ul>
      <button className='sidebarbtn'>Show More</button>
      <hr className='sidebarhr' />
          <ul className="sidebarfriendlist">
            {Users.map(u=>(
              <CloseFriend key={u.id} user={u}/>
            ))}
         </ul>
     </div>
    </div>
  )
}
