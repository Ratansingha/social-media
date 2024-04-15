import React from 'react'
import Post from '../post/Post'
import "./posts.scss"
const Posts = () => {
    const posts=[
        {
            id:1,
            name:"honey bear",
            userId:2,
            profilePic:"https://images.unsplash.com/photo-1622104551503-0d869c6224bf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:"good food is good for health speacially vegetable is the big source of vitamin  ",
            img:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            name:"honey bear",
            userId:3,
            profilePic:"https://images.unsplash.com/photo-1622104551503-0d869c6224bf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:"lorem is a man who live in america he want make a inter nation money system and done it ",
            img:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:3,
            name:"honey bear",
            userId:3,
            profilePic:"https://images.unsplash.com/photo-1622104551503-0d869c6224bf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:"lorem is a man who live in america he want make a inter nation money system and done it ",
            img:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:4,
            name:"honey bear",
            userId:4,
            profilePic:"https://images.unsplash.com/photo-1622104551503-0d869c6224bf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:"lorem is a man who live in america he want make a inter nation money system and done it ",
            img:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:5,
            name:"honey bear",
            userId:5,
            profilePic:"https://images.unsplash.com/photo-1622104551503-0d869c6224bf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:"lorem is a man who live in america he want make a inter nation money system and done it ",
            img:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts

