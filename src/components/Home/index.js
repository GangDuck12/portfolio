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
        Software developer specialization in Front end developement...
      </div>
      <div className="portrait">
      </div>
      <div className="stage">
        <div className="cubespinner">
          <div className="face1">Be</div>
          <div className="face2">Curious</div>
          <div className="face3">Be</div>
          <div className="face4">Creative</div>
          <div className="face5">Be</div>
          <div className="face6">Confident</div>
        </div>
        <div className="bottomline"></div>
        <div className="rightline"></div>
      </div>
    </div>
   )

 }

export default Home