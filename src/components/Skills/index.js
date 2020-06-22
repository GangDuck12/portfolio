import React from 'react';
import HTML from '../../img/html5-64.png';
import CSS from '../../img/css3-64.png';
import JS from '../../img/JavaScript-64.png';
import REACT from '../../img/react-64.png';
import GIT from '../../img/git-64.png';
import GITHUB from '../../img/github-64.png';
import './style.css';

/**
* @author
* @function Skills
**/

const Skills = (props) => {
  return(
    <div className="skills" id="skils">
      <h1>Skills</h1>
          <section>
            <h2>Mainly Used</h2>
            <div className="icon">
              <img src={HTML} style={{width:'50px'}}></img>
              <img src={CSS} style={{width:'50px'}}></img>
              <img src={JS} style={{width:'50px'}}></img>
              <img src={REACT} style={{width:'50px'}}></img>
            </div>
          </section>
          <section>
            <h2>Knowledgeable</h2>
            <div className="icon">
              <img src={GIT} style={{width:'50px'}}></img>
              <img src={GITHUB} style={{width:'50px'}}></img>
            </div>
          </section>
    </div>
   )

 }

export default Skills