import React from 'react'
import './style.css';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div className="home">
      <div className="profile">
        <p>
          Software developer specialization in Front end developement...
        </p>
      </div>
      <div className="stage">
        <div className="cubespinner">
          <div className="face1">Be</div>
          <div className="face2">Simple</div>
          <div className="face3">Be</div>
          <div className="face4">Symbol</div>
          <div className="face5">Be</div>
          <div className="face6">Sure</div>
        </div>
      </div>
        <div className="bottomline"></div>
        <div className="rightline"></div>
    </div>
   )

 }

export default Home