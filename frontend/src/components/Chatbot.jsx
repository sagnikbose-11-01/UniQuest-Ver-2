// components/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import { UNIBOT_FAQS, QUICK_REPLY_OPTIONS } from "../data/UniBotFaqs";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  const findFaqAnswer = (userText) => {
    const text = userText.toLowerCase().trim();
    
    // Return default message if input is empty
    if (!text) {
      return "Please ask me a question!";
    }

    // Find the best matching FAQ based on keywords
    let bestMatch = null;
    let maxMatches = 0;

    for (const faq of UNIBOT_FAQS) {
      let matchCount = 0;
      
      // Count how many keywords match
      for (const keyword of faq.keywords) {
        if (text.includes(keyword.toLowerCase())) {
          matchCount++;
        }
      }
      
      // Keep track of the FAQ with most matching keywords
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = faq;
      }
    }

    // Return the best match if found, otherwise default message
    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer;
    }

    return "I'm not sure about that—try asking differently or contact support!";
  };

  const handleSend = (msg = null) => {
    const finalText = (msg || input).trim();
    
    // Don't send empty messages
    if (!finalText) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: finalText }]);

    // Get bot reply
    const botReply = findFaqAnswer(finalText);

    // Add bot reply after a short delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
    }, 500);

    // Clear input only if it wasn't a quick reply
    if (!msg) {
      setInput("");
    }
  };

  const handleQuickReply = (faqId) => {
    const faq = UNIBOT_FAQS.find((f) => f.id === faqId);
    if (!faq) return;

    // Add both question and answer immediately
    setMessages((prev) => [
      ...prev,
      { type: "user", text: faq.question },
      { type: "bot", text: faq.answer },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior
      handleSend();
    }
  };

  // AUTO SCROLL FIX
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        {open ? "×" : "💬"}
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h3>UniBot Assistant</h3>
            <p>Ask me anything about UniQuest!</p>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-msg bot welcome-msg">
                👋 Hi! I'm UniBot. How can I help you today?
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-msg ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="quick-replies">
            {QUICK_REPLY_OPTIONS.map((q) => (
              <button
                key={q.faqId}
                onClick={() => handleQuickReply(q.faqId)}
                className="quick-btn"
              >
                {q.emoji} {q.label}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSend()} disabled={!input.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;