import React from 'react';
import icon from '../../img/Password-32.png';
import './style.css';

/**
* @author
* @function Skills
**/

const Skills = (props) => {
  return(
    <div className="skills">
      <h1>Skills</h1>
          <section>
            <h2>Strong</h2>
            <div className="icon">
              <img src={icon}></img>
              <img src={icon}></img>
            </div>
          </section>
          <section>
            <h2>Mainly Used</h2>
            <div className="icon">
              <img src={icon}></img>
              <img src={icon}></img>
            </div>
          </section>
          <section>
            <h2>Knowledgeable</h2>
            <div className="icon">
              <img src={icon}></img>
              <img src={icon}></img>
            </div>
          </section>
    </div>
   )

 }

export default Skills