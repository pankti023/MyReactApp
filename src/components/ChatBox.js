import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ChatBox({ isOpen, onClose }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission here
    console.log('Message submitted:', message);
    setMessage('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Chat Box"
      className="chat-modal"
      overlayClassName="chat-overlay"
    >
      <h2>Chat with Pankti</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default ChatBox;
