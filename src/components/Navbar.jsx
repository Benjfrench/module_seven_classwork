import React from "react"
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext"


export const Navbar = () => {
    const {mode} = useUserContext();
    //State/var
const linkList = [
    {to: '/lab-one', lable: 'Lab One'},
    {to: '/lab-two', lable: 'Lab Two'},
    {to: '/slide-work', lable: 'Slide Work'}
]
    //func
const linkListDisplayHandler = ()=>{
    return linkList.map((linkObject)=>{
        return(
            <li key={linkObject.to}>
                <NavLink to={linkObject.to}>{linkObject.lable}</NavLink>
            </li>
        )
    })
}
    //return
    return (
        <nav className="NavBar" 
style={{backgroundColor: mode === 'light' ? 'white': 'black', color: mode === ' light' ? 'black':'white'}}>
            <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {linkListDisplayHandler()}
            </ul> {/* ++ Add another page with route and component */}
        </nav>
    )
}