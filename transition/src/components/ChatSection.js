import React, { useState } from 'react';

function ChatSection() {
  const [activeTab, setActiveTab] = useState('conversation');
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'Rachel Adams',
      time: '9:08 PM',
      content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.',
      type: 'received'
    },
    {
      id: 2,
      sender: 'You',
      time: '9:08 PM',
      content: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.',
      type: 'sent'
    }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <div className="chat-section">
      <div className="chat-header">
        <div className="chat-tabs">
          <div 
            className={`chat-tab ${activeTab === 'conversation' ? 'active' : ''}`}
            onClick={() => setActiveTab('conversation')}
          >
            Conversation
          </div>
          <div 
            className={`chat-tab ${activeTab === 'address' ? 'active' : ''}`}
            onClick={() => setActiveTab('address')}
          >
            Address Update
          </div>
        </div>
        <div className="header-actions">
          <button className="header-button">Fee Reversal</button>
          <button className="header-button">Retail</button>
          <button className="header-button escalate-button">Escalate</button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.type}`}>
            <div className="message-avatar" />
            <div className="message-content">
              <div className="message-header">
                <span>{msg.sender}</span>
                <span>{msg.time}</span>
              </div>
              <p>{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='check-box'>
        <input type="checkbox"/><span className='fontcheck'>sms</span>
        <input type="checkbox"/><span className='fontcheck'>whatsapp</span>
        <input type="checkbox"/><span className='fontcheck'>mail</span>
      </div>

      <form className="message-input-container" onSubmit={handleSend}>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatSection;

