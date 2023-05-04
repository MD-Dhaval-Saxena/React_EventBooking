import React, { useState, useEffect } from "react";
import {
  useLocation,
  Link
} from "react-router-dom";


function NavbarOne() {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  return(

    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/home">Event Booking</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
 <Link className={`nav-link ${location.pathname==="/home" ? "active": ""}`} to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/link" ? "active": ""}`} to="/link">Link</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Functions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/CreateEvent">Create Event</Link>
          <Link className="dropdown-item" to="/addCategory">Add Ticket Category</Link>
          <Link className="dropdown-divider"></Link>
          <Link className="dropdown-item" to="#">Search Event</Link>
          <Link className="dropdown-item" to="/EventTotal">Show Events </Link>
        </div>
      </li>
      

     
    </ul>
    <form className="form-inline my-2 my-lg-0">

    <div class="dropdown">
         
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Profile
        </a>
        
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Mytickets">My tickets</Link>
          <Link className="dropdown-item" to="/LogOut">Log Out</Link>
          <Link className="dropdown-divider"></Link>
        </div>
      </div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Connect</button>

    </form>
  </div>
</nav>
  </>
    )
}

export default NavbarOne;

