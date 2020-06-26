import React from 'react';
import HTML from '../../images/icons/html5-64.png';
import CSS from '../../images/icons/css3-64.png';
import JS from '../../images/icons/JavaScript-64.png';
import REACT from '../../images/icons/react-64.png';
import GIT from '../../images/icons/git-64.png';
import GITHUB from '../../images/icons/github-64.png';
import './style.css';

/**
* @author
* @function Skills
**/

const Skills = (props) => {
  return(
    <div className="skills" id="skills">
      <h1>Skills</h1>
        <div className="content-skills1">
          <section>
            <div className="section1"></div>
            <h2>Mainly Used</h2>
            <div className="icon">
              <img src={HTML}></img>
              <img src={CSS}></img>
              <img src={JS}></img>
              <img src={REACT}></img>
            </div>
          </section>
            <p>주로 react를 프레임워크로 사용하여 css로 디자인합니다.</p>
        </div>
        <div className="content-skills2">
            <section>
              <div className="section2"></div>
              <h2>Knowledgeable</h2>
              <div className="icon">
                <img src={GIT}></img>
                <img src={GITHUB}></img>
              </div>
            </section>
            <p>프로젝트들의 버전관리를 위하여 git을 사용합니다.</p>
        </div>
    </div>
   )

 }

export default Skills