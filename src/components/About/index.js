import React from 'react';
import './style.css';

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <div className="about" id="about">
      <div className="about-background">
        <h1>About</h1>
        <div className="about-content">
          <div className="about-details">
            <section>
              <div className="about-overlay">
                <h3>Kang Kyoung Won</h3>
                <h4>Front-End Developer</h4>
                <p>
                  <span>React.js</span>를 이용한 Front-end 개발에 관심이 많습니다. 최근에는 사용자경험을 고려한 <span>UX</span>디자인과 <span>React testing</span>에 관심을 두고 있습니다.
                </p>
                <ul>
                  <li>Male</li>
                  <li>1992.12.24</li>
                  <li>DongA University</li>
                </ul>
              </div>
              <div className="about-bottom">
                <h3>Kang Kyoung Won</h3>
                <h4>Front-End Developer</h4>
                <p>
                  <span>React.js</span>를 이용한 Front-end 개발에 관심이 많습니다. 최근에는 사용자경험을 고려한 <span>UX</span>디자인과 <span>React testing</span>에 관심을 두고 있습니다.
                </p>
                <ul>
                <li>Male</li>
                <li>1992.12.24</li>
                <li>DongA University</li>
              </ul>
              </div>
            </section>
            <section>
              <div className="about-left">
                <h4>in this portfolio...</h4>
                <ul>
                  <li>3 personal <span>project</span></li>
                  <li><span>skills</span> to useds</li>
                  <li>how to <span>contact</span></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
   )

 }

export default About 