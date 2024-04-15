import React, { useContext } from 'react'
import "./comments.scss"
import { AuthContext } from '../../context/authContext'


const Comments = () => {
    const {currentUser}=useContext(AuthContext)
    //temporary comments 
    const comments = [
        {
            id:1,
            desc:"this is the first comments in my first website that i'm creating right now .you can comment your own whats have on you mind",
            name:"John Doe",
            userId:1,
            profilePic:"https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ1bCUyMG1hbiUyMGFuZCUyMHdvbWFufGVufDB8fDB8fHww"

        },
        {
            id:1,
            desc:"this is the first comments in my first website that i'm creating right now .you can comment your own whats have on you mind",
            name:"Rose Doe",
            userId:1,
            profilePic:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            id:1,
            desc:"this is the first comments in my first website that i'm creating right now .you can comment your own whats have on you mind",
            name:"Marlin Doe",
            userId:1,
            profilePic:"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"

        },
    ]
  return (
      <div className='comments'>
          <div className="write">
              <img src={currentUser.profilePic} alt="" /> 
              <input type="text" placeholder="write a comments" />
              <button>Send</button>
          </div>
    {comments.map(comment=>(
        <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
        </div>
    ))}
    </div>
  )
}

export default Comments
