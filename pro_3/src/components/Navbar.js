import React from "react";
import logo from '../images/air-bnb.png' ;
function Navbar() {
    return(
       <nav>
        <img src={logo} className="logo" alt="logo" />
       </nav>
    )
}

export default Navbar ;