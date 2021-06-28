import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () =>{
    return(
        <nav>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    )
}