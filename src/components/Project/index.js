import React, { useEffect, useState } from 'react';
import './style.css';
import project from '../../ProjectData/project.json'

/**
* @author
* @function Project
**/

const Project = (props) => {

  const[projs, setProjs] = useState([]);
  const[proj, setProj] = useState({
    id: "" ,
    projectTitle : "" ,
    projectOn: "" ,
    projectImage:"",
    projectText:"",
    projectSkills:""
  });


  useEffect(() => {
    const projs = project.data;
    setProjs(projs);
  },[projs])



  return(
    <div className="project" id="project">
      <div className="project-background">
        <h1>Project</h1>
      </div>
      <div className="projectNav">
        {
          projs.map(proj =>{
            return(
              <div key={proj.id}>
                <a href="#">
                  <div className="project-container">
                    <h3>{proj.projectTitle}</h3>
                    <p>{proj.projectOn}</p>
                    <div className="project-card">
                      <div className="img-box">
                        <img src={require(`../../images/${proj.projectImage}`)} alt="Project Image"></img>
                      </div>
                        <div className="content-details">
                          <p>{proj.projectText}</p>
                          <h5>Project Skills</h5>
                          <p>{proj.projectSkills}</p>
                        </div>
                  </div>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
   )

 }

export default Project