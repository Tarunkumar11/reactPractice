import React from "react";
import NavbarImg from './NavbarImg'
import Navbarheaading from "./Navbarheading"
import "./NavbarImg.css"
import './Navbarcss.css'

function Navbar() {
   return (
    <nav className="navbar-bar">
        <NavbarImg />
        <Navbarheaading />
    </nav>
   )
}

export default Navbar;
