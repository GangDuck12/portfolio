import React,{ useState } from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  console.log('Header render');

  let lists = [];
  let data = props.data;
  let i = 0;
  while(i < data.length){
    lists.push(
      <li key={data[i].id}>
        <a href={'./contents/'+data[i].id} data-id={data[i].id} onClick={function(e){
          e.preventDefault();
          props.onChangePage(e.target.dataset.id);
        }}>{data[i].title}
        </a>
        <div className="desc">
          {data[i].desc}
        </div>
      </li>);
    i = i + 1;
  }

  return(
    <div className="header">
        <ul>
          <div className="logo">
            <a 
              href="#" 
              onClick={function(e){
                e.preventDefault();
                props.onChangeMode();
              }}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                GangDuck
            </a>
          </div>
          <div className="lists">
            {lists}
          </div>
        </ul>
    </div>
   )

 }

export default Header