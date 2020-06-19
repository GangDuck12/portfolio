import React from 'react';
import duck from '../../img/Duck.jpg';
import './style.css';

/**
* @author
* @function Porject
**/

const Porject = (props) => {
  return(
    <div className="project">
      <h1>Porject</h1>
        <h2>login page</h2>
          <section>
            <img src={duck}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, earum, voluptates aspernatur sed est. Ad exercitationem, debitis nisi nostrum repellat atque mollitia molestias sunt velit hic reprehenderit facilis laborum nemo, provident consequuntur libero veniam! Mollitia illum magnam, dignissimos voluptas neque.</p>
          </section>
        <h2>To do list</h2>   
          <section>
            <img src={duck}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, earum, voluptates aspernatur sed est. Ad exercitationem, debitis nisi nostrum repellat atque mollitia molestias sunt velit hic reprehenderit facilis laborum nemo, provident consequuntur libero veniam! Mollitia illum magnam, dignissimos voluptas neque.</p>
          </section>
        <h2>cafe Web</h2>
          <section>
            <img src={duck}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, earum, voluptates aspernatur sed est. Ad exercitationem, debitis nisi nostrum repellat atque mollitia molestias sunt velit hic reprehenderit facilis laborum nemo, provident consequuntur libero veniam! Mollitia illum magnam, dignissimos voluptas neque.</p>
          </section>
       
    </div>
   )

 }

export default Porject