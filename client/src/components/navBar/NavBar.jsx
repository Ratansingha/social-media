import React, { useContext } from 'react'
import "./navBar.scss"
import { Link } from 'react-router-dom'
import{DarkModeOutlined, EmailOutlined, GridViewOutlined,HomeOutlined, NotificationsOutlined, PersonOutlined, SearchOutlined, WbSunnyOutlined} from "@mui/icons-material"
import { DarkModeContext } from '../../context/darkMode'
import { AuthContext } from '../../context/authContext'


const NavBar = () => {
  const {toggle,darkMode}=useContext(DarkModeContext)
  const {currentUser}=useContext(AuthContext)

  return (
    <div className='navBar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>RatanSocial</span>
        </Link>
      <HomeOutlined/> 
    {darkMode ?  (<DarkModeOutlined onClick={toggle}/> ):(<WbSunnyOutlined onClick={toggle}/>) }
      <GridViewOutlined/>
      <div className="search">
        <SearchOutlined/>
        <input type="text" placeholder="search..."/>
      </div>
      </div>

      <div className="right">
        <PersonOutlined/>
        <EmailOutlined/>
        <NotificationsOutlined/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
