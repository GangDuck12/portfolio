import React,{ useEffect } from 'react';
import tdl from '../../img/tdl.png';
import cafeweb from '../../img/cafeweb.png';
import login from '../../img/login.png';
import './style.css';

/**
* @author
* @function Porject
**/

const Porject = (props) => {

  let lastScrollY = 0;
  let ticking = false;

  useEffect(() =>{
      window.addEventListener('scroll', handleScroll,true);
      console.log('compoDidMount');
      return function(){
        window.removeEventListener('scroll', handleScroll);
        console.log('compoWillunmount');
      } 
    
  },[]);

  let nav = React.createRef();

  const handleScroll = () => {
    lastScrollY = window.scrollY;

    if(!ticking){
      window.requestAnimationFrame(() => {
        nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
        console.log("lastScrollY",lastScrollY);
      });
      ticking = true;
    }
  };

  const img1 = 'img1';

  return(
    <div className="project" id="project">
      <div>
        <nav ref={nav}>avc</nav>
      </div>
      <h1>Porject</h1>
        <h2>login page</h2>
          <section>
            <img className={img1} src={login} style={{width:'350px', height:'200px'}}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, earum, voluptates aspernatur sed est. Ad exercitationem, debitis nisi nostrum repellat atque mollitia molestias sunt velit hic reprehenderit facilis laborum nemo, provident consequuntur libero veniam! Mollitia illum magnam, dignissimos voluptas neque.</p>
          </section>
        <h2>To do list</h2>   
          <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, earum, voluptates aspernatur sed est. Ad exercitationem, debitis nisi nostrum repellat atque mollitia molestias sunt velit hic reprehenderit facilis laborum nemo, provident consequuntur libero veniam! Mollitia illum magnam, dignissimos voluptas neque.</p>
            <img src={tdl} style={{width:'350px', height:'200px'}}></img>
          </section>
        <h2>cafe Web</h2>
          <section>
            <img src={cafeweb} style={{width:'350px', height:'200px'}}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, earum, voluptates aspernatur sed est. Ad exercitationem, debitis nisi nostrum repellat atque mollitia molestias sunt velit hic reprehenderit facilis laborum nemo, provident consequuntur libero veniam! Mollitia illum magnam, dignissimos voluptas neque.</p>
          </section>
       
    </div>
   )

 }

export default Porject