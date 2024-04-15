import React, { useContext } from 'react'
import "./leftbar.scss"

import friends from "../../assets/friends.png"
import groups from "../../assets/groups.jpg"
import market from "../../assets/market-place.png"
import watch from "../../assets/watch.png"
import memory from "../../assets/memory.png"
import message from "../../assets/message.png"
import events from "../../assets/events.jpg"
import games from "../../assets/games.png"
import gallery from "../../assets/gallery.png"
import tutorial from "../../assets/tutorial.png"
import course from "../../assets/course.png"
import funds from "../../assets/funds.png"
import videos from "../../assets/videos.jpg"
import { AuthContext } from '../../context/authContext'

const LeftBar = () => {
    const {currentUser}= useContext(AuthContext)
  return ( 
        <div className='leftBar'>
           <div className="container">

        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            </div>
            <div className="item">
                <img src={friends} alt="" />
                <span>Friends</span>
            </div>
            <div className="item">
                <img src={groups} alt="" />
                <span>Groups</span>
            </div>
            <div className="item">
                <img src={market} alt="" />
                <span>Market</span>
            </div>
            <div className="item">
                <img src={watch} alt="" />
                <span>Watch</span>
            </div>
            <div className="item">
                <img src={memory} alt="" />
                <span>Memory</span>
            </div>
            <hr/> 
        <div className="menu">
            
       <span>Your Shortcuts</span>
            <div className="item">
                <img src={message} alt="" />
                <span>Message</span>
            </div>
            <div className="item">
                <img src={events} alt="" />
                <span>Events</span>
            </div>
            <div className="item">
                <img src={games} alt="" />
                <span>Games</span>
            </div>
            <div className="item">
               <img src={gallery} alt="" />
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src={videos} alt="" />
                <span>Videos</span>
            </div>
            <hr />
            <div className="menu">
            <span>Others</span>
               
            <div className="item">  
                <img src={tutorial} alt="" />
                <span>Tutorial</span>
            </div>
            <div className="item">
                <img src={course} alt="" />
                <span>Course</span>
            </div>
            <div className="item">
                <img src={funds} alt=""/>
                <span>Funds</span>
            </div>
            <div className="item">
                <img src={funds} alt=""/>
                <span>Funds</span>
            </div>
            <div className="item">
                <img src={funds} alt=""/>
                <span>Funds</span>
            </div>
            <div className="item">
                <img src={funds} alt=""/>
                <span>Funds</span>
            </div>
            <div className="item">
                <img src={funds} alt=""/>
                <span>Funds</span>
            </div>
            <div className="item">
                <img src={funds} alt=""/>
                <span>Funds</span>
            </div>
            </div>
        </div>
          </div>
       </div>
    </div>
  )
};

export default LeftBar
