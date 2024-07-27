import React, {useState} from "react"
import { useUserContext } from "../context/UserContext"

export const GlobalState = () =>{
//state var
const {currentUser, mode, emoji, toggleEmoji} = useUserContext() 

//func


//return
    return(
        <div 
        style={{
            display: "flex", width: "100%", justifyContent: "space-between"
    }}>{currentUser.name} {mode} {emoji}
    <button onClick={toggleEmoji}>Toggle Emoji</button></div>
    )
}