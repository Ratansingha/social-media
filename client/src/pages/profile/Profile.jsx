import React from 'react'
import "./profile.scss"
import { EmailOutlined, FacebookTwoTone, Instagram, Language, LinkedIn, MoreVert, Pinterest, Place, Twitter } from '@mui/icons-material'
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.unsplash.com/photo-1699239076672-2c62e530d606?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="cover" />
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone fontSize="large"/>
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize="large"/>
            </a>
            <a href="http://facebook.com">
              <Twitter fontSize="large"/>
            </a>
            <a href="http://facebook.com">
              <LinkedIn fontSize="large"/>
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize="large"/>
            </a>
            </div>
          <div className="center">
            <span>Rivera valerie</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>USA</span>
              </div>
              <div className="item">
                <Language />
                <span>Ratan.dev</span>
              </div>
            </div>
             <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert/>
          </div>
        </div>
        
      </div>
      <Posts/>
    </div>
  )
}

export default Profile
