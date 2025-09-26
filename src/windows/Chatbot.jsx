import React, { useState, useRef, useEffect } from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaRegSmile, FaAppStore, FaPaperPlane } from 'react-icons/fa';

const WindowContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatArea = styled.div`
  background: rgba(245,245,255,0.7);
  border-radius: 12px 12px 0 0;
  padding: 18px 12px 12px 12px;
  flex: 1 1 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Bubble = styled.div`
  max-width: 70%;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  background: ${props => (props.isUser ? 'linear-gradient(120deg, #4f9cff 60%, #3578e5 100%)' : '#e5e5ea')};
  color: ${props => (props.isUser ? '#fff' : '#222')};
  border-radius: 22px;
  padding: 10px 18px;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 2px;
  word-break: break-word;
  a { color: #fff; text-decoration: underline; }
`;

const InputBarWrapper = styled.div`
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.04);
  padding: 10px 12px 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: sticky;
  bottom: 0;
  z-index: 2;
  margin-bottom: 25px;
`;
const AppIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 1.3rem;
  margin-right: 4px;
`;
const Input = styled.input`
  flex: 1;
  border-radius: 18px;
  border: 1px solid #d0d0e0;
  padding: 10px 16px;
  font-size: 1rem;
  outline: none;
  background: #f7f7fa;
  color: #222;
`;
const SendButton = styled.button`
  background: #f7f7fa;
  color: #3578e5;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.18s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  &:hover {
    background: #eaf1ff;
  }
  &:disabled {
    color: #bbb;
    background: #f7f7fa;
    cursor: not-allowed;
  }
`;

function linkify(text) {
  // Simple linkify for URLs
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    part.match(/^https?:\/\//)
      ? <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
      : part
  );
}

const Chatbot = ({ isOpen, isMinimized, isMaximized, onClose, onMinimize, onMaximize, onRestore, defaultPosition }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Sarthak Sethi, what would you like to learn about me?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5002/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'bot', text: data.response }]);
    } catch {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Sorry, there was an error connecting to the chatbot.' }]);
    }
    setLoading(false);
  };

  return (
    <WindowFrame
      title="Sarthak Sethi"
      isOpen={isOpen}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      defaultPosition={defaultPosition}
      defaultSize={{ width: 420, height: 500 }}
    >
      <WindowContent>
        <ChatArea ref={chatRef}>
          {messages.map((msg, i) => (
            <Bubble key={i} isUser={msg.from === 'user'}>{linkify(msg.text)}</Bubble>
          ))}
          {loading && <Bubble isUser={false}>...</Bubble>}
        </ChatArea>
        <InputBarWrapper as="form" onSubmit={sendMessage} autoComplete="off">
          <AppIcon><FaAppStore /></AppIcon>
          <Input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="iMessage"
            disabled={loading}
          />
          <SendButton type="submit" disabled={loading || !input.trim()} title="Send">
            <FaPaperPlane />
          </SendButton>
        </InputBarWrapper>
      </WindowContent>
    </WindowFrame>
  );
};

export default Chatbot; 