import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

Modal.setAppElement('#root');

function ChatBox({ isOpen, onClose, recipientName }) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Message cannot be empty.');
      return;
    }

    // EmailJS parameters
    const templateParams = {
      recipient_name: recipientName,
      user_message: message,
      user_email: 'parikhpankti023@gmail.com', // Replace with your email address
    };

    emailjs
      .send(
        'service_pankti', // Replace with your EmailJS service ID
        'template_bey6gvi', // Replace with your EmailJS template ID
        templateParams,
        'nEQSV1bEvzks9vKjE' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setSuccess('Message sent successfully!');
          setMessage('');
          setError('');
        },
        (err) => {
          console.error('Failed to send email:', err);
          setError('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Chat Box"
      className="chat-modal"
      overlayClassName="chat-overlay"
    >
      <h2>Chat with {recipientName}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit" className="send-btn">Send</button>
      </form>
      <button onClick={onClose} className="close-btn">Close</button>
    </Modal>
  );
}

export default ChatBox;

