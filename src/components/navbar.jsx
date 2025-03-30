import React from 'react';
import './navb.css';
import Trading from './images/Trading_Site.png';
import Icon from "./images/icon.png"
import { useNavigate } from 'react-router-dom';
const Navbar= () => {
   const navigate = useNavigate();
  return (
    <>
    <nav className="navbar">
      <img src={Icon}/>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/second">Create Strategy</a></li>
        <li><a href="/savedStrategies">Saved Strategy</a></li>
        <li><a href="#">Support</a></li>
        <li><button className="sign-in-btn">Sign In / Sign Up</button></li>
      </ul>
    </nav>
   
    
 </>
 );
};

export default Navbar;
