import React from 'react';
import TypeScript from '../../images/icons/typescript-64.png';
import Jest from '../../images/icons/jest-64.png';
import './style.css';

/**
* @author
* @function Interest
**/

const Interest = (props) => {
  return(
    <div className="interest" id="interest">
        <h1>interest</h1>
        <img src={Jest}></img>        
        <p>react 렌더링이 되는 과정에서의 테스팅</p>
        <img src={TypeScript}></img>
        <p>타이핑과 안정성 측면에서 버그 감소</p>
        <h3>Etc...</h3>
        <p>모바일 ios,android 동시 개발을 위한 <span>React-Native</span> react상태관리를 위한<span>Redux</span> 사용자측면에서의 디자인<span>UI/UX</span></p>        
    </div>
   )

 }

export default Interest 