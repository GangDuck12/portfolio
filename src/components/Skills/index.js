import React from 'react';
import HTML from '../../images/icons/html5-64.png';
import CSS from '../../images/icons/css3-64.png';
import JS from '../../images/icons/JavaScript-64.png';
import REACT from '../../images/icons/react-64.png';
import GIT from '../../images/icons/git-64.png';
import GITHUB from '../../images/icons/github-64.png';
import TypeScript from '../../images/icons/typescript-64.png';
import Jest from '../../images/icons/jest-64.png';
import Webpack from '../../images/icons/webpack-64.png';
import Ux from '../../images/icons/ux-64.png';
import './style.css';

/**
* @author
* @function Skills
**/

const Skills = (props) => {
  return(
    <div className="skills" id="skills">
      <div className="skills-background">
        <h1>Skills</h1>
            <section> 
              <div className="content-mainly">
                <div className="mainly-overlay">
                  <div className="mainly-details">
                    <p>주로 <span>REACT</span>를 프레임워크로 사용하여 <span>CSS</span>로 디자인합니다.</p>
                  </div>
                </div>
                  <h2>Mainly Used</h2>
                    <img src={HTML}></img>
                    <img src={CSS}></img>
                    <img src={JS}></img>
                    <img src={REACT}></img>               
              </div>
            </section>
            <section>
              <div className="content-know">
                <div className="know-overlay">
                  <div className="know-details">
                    <p>프로젝트들의 버전관리를 위하여 <span>GIT</span>을 사용합니다.</p>
                  </div>
                </div>
                  <h2>Use experience</h2>
                    <img src={GIT}></img>
                    <img src={GITHUB}></img>                
              </div>
            </section>
            <section>
              <div className="content-interest">
                <div className="interest-overlay">
                  <div className="interest-details">
                    <ul>
                      <li>안정성과 확장성</li>
                      <li>React 렌더링 테스팅</li>
                      <li>효과적인 React활용</li>
                      <li>사용자 경험까지 개선</li>
                    </ul>
                  </div>
                </div>
                  <h2>Interest</h2>
                  <img src={TypeScript}></img>
                  <img src={Jest}></img>
                  <img src={Webpack}></img>
                  <img src={Ux}></img>
              </div>
            </section>
      </div>
    </div>
   )

 }

export default Skills