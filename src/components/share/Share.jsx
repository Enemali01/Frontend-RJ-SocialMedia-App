import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return(
  <div className='share'>
      <div className="sharewrapper">
        <div className="shareTop">
            <img src='public/assets/person/images.jpeg-1-1.jpg' className="shareprofilepicture"/>
          <input placeholder='What is on your mind...' className='shareinput' />
        </div>
        <hr className='sharehr'/>
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon'/>
              <span className='shareOptionText'>Video or Text</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon'/>
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon'/>
              <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod r' className='shareIcon'/>
              <span className='shareOptionText'>Fellings</span>
            </div>
          </div>
          <button className='shareBtn'>Share</button>
        </div>
      </div>
  </div>
  )
}
