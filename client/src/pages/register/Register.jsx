import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>Ratan Social.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem velit soluta sapiente libero minima possimus laudantium ipsa nesciunt quidem, eos quaerat beatae! Quae ullam quibusdam provident harum placeat perspiciatis!
            </p>
            <span>Already have an account?</span>
            <Link to = "/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form >
                <input type="text" placeholder='Username' />
                <input type="name" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />

               

                <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
