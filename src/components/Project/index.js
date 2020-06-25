import React, { useEffect, useState } from 'react';
import tdl from '../../img/tdl.png';
import cafeweb from '../../img/cafeweb.png';
import login from '../../img/login.png';
import './style.css';
import project from '../../ProjectData/pro.json'

/**
* @author
* @function Porject
**/

const Porject = (props) => {

  const[posts, setPosts] = useState([]);
  const[post, setPost] = useState({
    id: "" ,
    projectTitle : "" ,
    slug: "" ,
    postedOn: "" 
  });

  const[postId, setPostId] = useState('');

  useEffect(() => {
    const posts = project.data;
    setPosts(posts);
  },[posts])



  return(
    <div className="project" id="project">
      <h1>Porject</h1>
      {
        posts.map(post =>{
          return(
            <div className="projectNav">
              <a key={post.id} href={`/post/${post.id}`}>
                <h3>{post.projectTitle}</h3>
                <p>{post.postedOn}</p>
              </a>
            </div>
          )
        })
      }
      <div className="projectContent">
        <h2>{post.projectTitle}</h2>
        <p>{post.porjectText}</p>
      </div>
    </div>
   )

 }

export default Porject