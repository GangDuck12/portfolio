import React,{ useState } from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const[toggleOn,setToggle] = useState(false);

  const toggle = () => {
    setToggle(!toggleOn);
  }

  const toggleClass = toggleOn? 'toggle active' : 'toggle';
  const navClass = toggleOn? 'nav active' : 'nav';

  return(
    <div className="header">
        <a href="#" className="logo">Home</a>
        <ul className={navClass}>
          <li><a href="#project">project</a></li>
          <li><a href="#skils">skils</a></li>
          <li><a href="#interest">interest</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <div className="toggleIn">
          <div className={toggleClass} onClick={toggle}></div>
        </div>
    </div>
   )

 }

export default Header