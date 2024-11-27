import React, { useState } from 'react';
import './Footer.css';
import ChatBox from './ChatBox'; // Import your ChatBox component

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Manage chat modal state

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen); // Toggle chat modal open/close
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Mail Icon */}
        <a href="mailto:your-email@example.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" className="social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Chat Button */}
      <button className="chat-button" onClick={handleChatToggle}>Chat with Me</button>

      <p>&copy; 2024 Pankti Parikh </p>

      {/* Conditional Rendering of ChatBox */}
      {isChatOpen && <ChatBox isOpen={isChatOpen} onClose={handleChatToggle} />}
    </footer>
  );
};

export default Footer;
