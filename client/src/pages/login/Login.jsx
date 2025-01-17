import React, { useContext } from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const {login}=useContext(AuthContext)
  const handleLogin = ()=>{
    login()
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello world.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem velit soluta sapiente libero minima possimus laudantium ipsa nesciunt quidem, eos quaerat beatae! Quae ullam quibusdam provident harum placeat perspiciatis!
            </p>
            <span>Don't have an account?</span>

            <Link to= "/register">
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' />

                <input type="password" placeholder='Password' />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
