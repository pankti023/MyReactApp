import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer({ openChat }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Pankti Parikh. All rights reserved.</p>
          <div className="social-links">
            <a href="parikhpankti023@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="www.linkedin.com/in/panktiparikh023"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <button className="chat-button" onClick={openChat}>Chat with me</button>
      </div>
    </footer>
  );
}

export default Footer;
