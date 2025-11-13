// components/Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { type: 'user', text: input }]);
    // mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: `You said: ${input}` }]);
    }, 500);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        {open ? '×' : '💬'}
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-msg ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type here..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
