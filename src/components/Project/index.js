import React, { useEffect, useState } from 'react';
import './style.css';
import project from '../../ProjectData/project.json'

/**
* @author
* @function Porject
**/

const Porject = (props) => {

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
      <h1>Porject</h1>
      <div className="projectNav">
        {
          projs.map(proj =>{
            return(
              <div>
                  <h3>{proj.projectTitle}</h3>
                  <p>{proj.projectOn}</p>
                <a key={proj.id} href={`/proj/${proj.id}`}>
                  <div className="content">
                    <div className="content-overlay"></div>
                      <img src={require(`../../images/${proj.projectImage}`)} alt="Project Image"></img>
                      <div className="emptySpace"></div>
                      <div className="content-details">
                        <p>{proj.projectText}</p>
                        <h5>Project Skills</h5>
                        <p>{proj.projectSkills}</p>
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

export default Porject