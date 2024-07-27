import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { GlobalState } from "../components/GlobalState";

export const ContextWork = () => {
  // STATE / VAR
const {currentUser, handleUpdateUser, mode, toggleMode} = useUserContext()
  const [firstName, setFirstName] = useState("Guest")
  // USEEFFECT

  // FUNC
const handleNameChange = (e) =>{
  handleUpdateUser({name: e.target.value})
}
  // RETURN
  return( <div style={{width:"100%"}}>
    <div><GlobalState/></div>
    <div
        style={{width: "inherit", 
                border: "solid blue 1px", 
                padding: "10px", 
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: mode === "dark" ? "black" : "lightgrey",
                color: mode === "dark" ? "white" : "black"
             }}
      >
        <p>First content example</p>
        
        
        <input value={currentUser.name} onChange={handleNameChange}/>
        <button onClick={toggleMode}>{mode}mode</button>
</div>
  </div>
);
};


