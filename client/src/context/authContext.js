import { createContext, useEffect, useState } from "react";

export const AuthContext= createContext()

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = ()=>{
    setCurrentUser({
        id:1,
        name:"John carter",
        profilePic:"https://images.unsplash.com/photo-1622104551503-0d869c6224bf?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    })
    }

    useEffect(()=>{
localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser,login}}>
        {children}
    </AuthContext.Provider>
    )
    
}