import React from 'react';
import "./NavbarImg.css"
import companyLogo from '../images/epam.png'

function NavbarImg() {
    return (
      <div className="navbar-text">
        <img src={ companyLogo } alt=""/>
      </div>
    )
}

export default NavbarImg