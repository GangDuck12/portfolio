import React from 'react';
import './style.css';

/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
    <div className="contact" id="contact">
      <div className="contact-overlay"></div>
      <h1>Contact</h1>
      <div className="contact-content">
        <section></section>
        <section>
          <div className="contact-details">
            <h2>Thank you :)</h2>
              <ul>
                <li>phone:<span>010.9424.9977</span></li>
                <li>maill:<span>gangduck12@gmail.com</span></li>
                <li>Github:<span>https://github.com/GangDuck12/</span></li>
              </ul>
          </div>
        </section>
      </div>
    </div>
   )

 }

export default Contact