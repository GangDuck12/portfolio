import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="header">
        <a href="#" className="logo">Home</a>
        <ul>
          <li><a href="#project">project</a></li>
          <li><a href="#skils">skils</a></li>
          <li><a href="#interest">interest</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
    </div>
   )

 }

export default Header