import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='container'>
        <h2>Contact Us</h2>
        <div className='cntinfo'>
          <p>
            <a href='mailto:admin@handsofsupport.ca'> admin@handsofsupport.ca</a><br>
            </br>
            <a href='tel:6477070311'>+1(647)-707-0311</a>
          </p>
        </div>
    </div>
  )
}

export default Contact;
